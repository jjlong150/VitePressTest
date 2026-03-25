# Splitting Labels

Splitting labels is helpful whenever long text needs to be broken into readable, well‑structured lines. By inserting controlled line breaks and choosing the justification for each line, you can make dense information easier to scan and visually balanced within a node. Common scenarios include:

- **Long Titles or Descriptions:** Breaking a lengthy name or description into multiple lines so it fits neatly inside a node.
- **Key–Value Formatting:** Presenting structured information such as “Name / Role / Status” on separate lines for clarity.
- **Improving Readability:** Preventing wide, stretched labels that distort node shapes or push the graph layout outward.
- **Aligning Text for Emphasis:** Using left, center, or right justification to match the visual style of your diagram or highlight certain information.
- **Displaying Metadata:** Showing attributes like IDs, timestamps, or categories on separate lines without overwhelming the main label.
- **Creating Consistent Layouts:** Ensuring that nodes with varying text lengths still appear uniform by controlling where lines break.
- **Designing Compact Diagrams:** Reducing horizontal sprawl by stacking text vertically instead of letting labels grow sideways.

These scenarios benefit from the label‑splitting capability because it gives you precise control over how text appears inside each node, resulting in cleaner, more readable, and more intentional diagrams.

A Relational Visualizer SQL extension allows you to split long strings into multi‑line labels and specify the line ending that controls whether each line is left‑, center‑, or right‑justified

| Action           | Column Name         |
| ---------------- | :-----------------: |
| **Split Length** | `SPLIT LENGTH`      |
| **Line Ending**  | `LINE ENDING`       |

To split labels add the fragment below to your SQL statement:

```sql
        '5'  as [SPLIT LENGTH], 
        '\n' as [LINE ENDING],
```

In this example, the label will be split into multiple lines at boundaries as close as possible to 12 characters. Splits occur only at spaces, so any word longer than 12 characters will remain unbroken at its full length.

Line endings can be any string<sup>[1]</sup>. The most commonly used line endings are:

| Line Ending | Meaning / Usage                           |
| :----------:|------------------------------------------ |
| `\n`        | New line with center alignment            |
| `\r`        | New line with right alignment             |
| `\l`        | New line with left alignment              |
| `\|`        | Pipe delimiter (useful for Record shapes) |
| `<br/>`     | HTML line break (for HTML‑like labels)    |

<sup>[1]</sup> New line `\n` is the default if `SPLIT LENGTH` is specified, but `LINE ENDING` is omitted.

Here is an example:

*Before:*

| This is a very long label that stretches the node |
| :-------------------------------------------: |

*After:*

| This is a very<br/>long label<br/>that stretches<br/>the node |
| :-------------------------: |


