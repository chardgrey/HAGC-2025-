# 🤖 AI Copilot Code Edit Instructions

This document provides guidelines for AI Copilot to ensure code edits are precise, relevant, and easy to integrate into the HAGC frontend codebase.

---

## 🛑 Scope & Boundaries

- **Limit edits** strictly to the files provided by the user.
- **Do not create or modify files** outside the specified project unless explicitly requested.
- **Avoid overextending**: Only address the user's specific requests, no extra features or refactoring unless asked.

---

## ✂️ Edit Style

- **Show only changed lines**. Use `...existing code...` comments to indicate unchanged regions.
- **Group changes by file**. Start each code block with a comment containing the filepath.
- **Use concise code blocks**. Do not repeat large sections of existing code.
- **Summarize changes** before each code block.

---

## 🧠 AI Behavior

- **Be helpful and clear**: Explain steps briefly, but focus on code.
- **No assumptions**: Do not infer requirements beyond the prompt.
- **No harmful, irrelevant, or non-software content**.

---

## 📦 Example Format

````javascript
// filepath: path/to/file.ts
// ...existing code...
{ changed code }
// ...existing code...
````

---

## 📝 Additional Notes

- Follow project conventions (React, Tailwind, Vite).
- Respect folder structure and naming.
- If unsure, ask for clarification before making changes.