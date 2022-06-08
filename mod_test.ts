import { assertEquals } from "https://deno.land/std@0.142.0/testing/asserts.ts";
import { genfun } from "./mod.ts";

Deno.test("genfun", function() {
  const fn = genfun()
    ('function add(n) {')
      ('return n + %d', 42)
    ('}');
  assertEquals(fn.toString(), 'function add(n) {\n  return n + 42\n}');
});
