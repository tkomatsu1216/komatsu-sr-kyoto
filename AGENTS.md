<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- shared-second-brain -->

## Shared Second Brain

Codex / その他のエージェントは作業開始時に毎回以下を読む（長期判断が必要なときに限らない）。

1. C:\Biz\ai-second-brain\AGENTS.md
2. C:\Biz\ai-second-brain\CLAUDE.md
3. C:\Biz\ai-second-brain\Memory.md
4. C:\Biz\ai-second-brain\rules\corrections.md
5. C:\Biz\ai-second-brain\rules\mistakes.md
6. C:\Biz\ai-second-brain\wiki\index.md

### 書き込みルール（2026-11-08 改定）

- 知識の正本は C:\Biz\ai-second-brain。Claude Code の auto memory（~/.claude/projects/*/memory/）や Codex の memories に保存する内容は、同じターンで Vault にも書く。
- 追記は確認不要でその場で書く。訂正・要望 → rules\corrections.md、AIの失敗 → rules\mistakes.md、案件の前提・決定・ハマりどころ → wiki\ のページと wiki\index.md、オーナーの前提変更 → Memory.md。
- 確認が要るのは、削除・既存記述の書き換え・大量改名・外部送信だけ。
- 作業を終える前に「次回も使う知識が出たか」を確認し、出たら Vault に書いてから終える。
