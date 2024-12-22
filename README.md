Explanation of Annotations:
test.skip:
Unconditionally skips the test.
Can also skip conditionally based on logic.

test.fail:
Marks the test as expected to fail.
Useful when you know the test is broken but want it included in the test report

test.fixme:
Marks the test as incomplete or needing fixes.
Prevents the test from running.

test.slow:
Indicates the test is slow and adjusts timeouts.

Conditional Skipping:
Uses test.skip(condition, reason) to skip tests based on a runtime condition, such as browser type or feature availability.





