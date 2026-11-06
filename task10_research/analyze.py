#!/usr/bin/env python3
"""Recheck the supplied controlled-string observations using Python 3 stdlib."""
import csv
import statistics
from collections import defaultdict
from pathlib import Path

DATA = Path(__file__).with_name("raw_data.csv")
EXPECTED_GROUPS = {"ascii_only": 0, "mixed": 2, "hangul_only": 5}
rows = []
with DATA.open("r", encoding="utf-8-sig", newline="") as stream:
    for row in csv.DictReader(stream):
        row["hangul_count"] = int(row["hangul_count"])
        row["ascii_count"] = int(row["ascii_count"])
        row["codepoints"] = int(row["codepoints"])
        row["utf8_bytes"] = int(row["utf8_bytes"])
        rows.append(row)

assert len(rows) == 12, f"Expected 12 records, found {len(rows)}"
groups = defaultdict(list)
for row in rows:
    text = row["text"]
    actual_codepoints = len(text)
    actual_bytes = len(text.encode("utf-8"))
    actual_hangul = sum("\uac00" <= ch <= "\ud7a3" for ch in text)
    actual_ascii = sum(ord(ch) < 128 for ch in text)
    assert actual_codepoints == row["codepoints"], row["id"]
    assert actual_bytes == row["utf8_bytes"], row["id"]
    assert actual_hangul == row["hangul_count"], row["id"]
    assert actual_ascii == row["ascii_count"], row["id"]
    assert actual_codepoints == 5, row["id"]
    assert actual_hangul + actual_ascii == 5, row["id"]
    assert row["hangul_count"] == EXPECTED_GROUPS[row["group"]], row["id"]
    groups[row["group"]].append(actual_bytes)

assert set(groups) == set(EXPECTED_GROUPS)
assert all(len(values) == 4 for values in groups.values())
print("Validation passed: 12 rows; recorded values match UTF-8 recomputation.")
for group in ("ascii_only", "mixed", "hangul_only"):
    vals = groups[group]
    print(f"{group}: n={len(vals)}, values={vals}, mean={statistics.mean(vals):g}")
