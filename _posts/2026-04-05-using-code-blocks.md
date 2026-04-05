---
layout: post
title: "💻 Mastering macOS-Style Code Blocks"
date: 2026-04-05
categories: features
author: "Lakshya"
cover: https://placehold.co/900x400?text=Post+image
---

The standout feature of this template is the **macOS-style terminal code blocks**. They come with built-in window controls and a high-precision "Copy" button.

### How to use them
Just use standard Markdown fenced code blocks. The theme handles the rest!

```python
def hello_world():
    # This block will automatically get:
    # 1. macOS Window Dots
    # 2. A "PYTHON" language label
    # 3. A "COPY" button that actually works
    print("Hello from the Amazing Portfolio Template!")
```

### Pro-Tip

If you want line numbers, ensure your _config.yml has line_numbers: true set for your markdown highlighter (Kramdown/Rouge).

The CSS is "Locked-in" to ensure these buttons never overlap, even on your mobile device!