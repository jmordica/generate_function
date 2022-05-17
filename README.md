# generate_function

Module that helps you write generated functions in Deno

fork by https://github.com/mafintosh/generate-function

## Disclamer

Writing code that generates code is hard. You should only use this if you really, really, really need this for performance reasons (like schema validators / parsers etc).

## usage
```ts
import { assertEquals } from "https://deno.land/std@0.139.0/testing/asserts.ts";
import { genfun } from "https://deno.land/x/generate_function@v1.0.0/mod.ts";

Deno.test("genfun", function() {
  const fn = genfun()
    ('function add(n) {')
      ('return n + %d', 42)
    ('}');
  assertEquals(fn.toString(), 'function add(n) {\n  return n + 42\n}');
});

```
