/**
 * @title Walking directories
 * @difficulty beginner
 * @tags cli
 * @run -R <url>
 * @resource {https://docs.deno.com/api/deno/~/Deno.readDir} Doc: Deno.readDir
 * @resource {https://jsr.io/@std/fs/doc/walk/~} Doc: @std/fs/walk
 * @group File System
 *
 * When doing something like filesystem routing, it is
 * useful to be able to walk down a directory to visit
 * files.
 */

// If the directory has no depth (no folders), we can use
// the built-in Deno.readDir
for await (const dirEntry of Deno.readDir(".")) {
  console.log("Basic listing:", dirEntry.name);
}

// If on the other hand you need to recursively walk
// a repository, the standard library has a method for this.
// In the most simple case it is a drop-in replacement
import { walk } from "jsr:@std/fs/walk";

for await (const dirEntry of walk(".")) {
  console.log("Recursive walking:", dirEntry.name);
}

// We are also able to specify some settings to customize
// our results. In the case of building filesystem routing
// limiting results to only certain extensions may be useful
for await (const dirEntry of walk(".", { exts: ["ts"] })) {
  console.log("Recursive walking with extension:", dirEntry.name);
}
