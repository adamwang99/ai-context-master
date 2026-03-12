# 🧠 AI Context Master - Universal Context OS

![Banner](https://raw.githubusercontent.com/adamwang99/ai-context-master/main/AI%20CONTEXT%20MASTER.png)

> The ultimate context operating system for every AI Agent - Powered by Memory Stack Technology
> Universal Context Operating System for Claude Code, Cursor, Copilot, and all Autonomous Agents

---

## 📋 Overview

**AI Context Master** (Universal Context OS) is a comprehensive context operating system that helps every AI Agent to:
- ✅ Remember identity, preferences, and rules
- ✅ Look up accurate API documentation
- ✅ Automatically remember every conversation
- ✅ Work in parallel with multiple sub-agents

---

## 🚀 Key Features

| Feature | Description |
|--------|-------------|
| **Memory Stack** | 10+ files containing identity, rules, workflow |
| **Context Hub** | Lookup accurate API docs (no hallucination) |
| **MemoryOS** | Automatically remember every conversation |
| **Subagents** | 6 specialized agents for crypto projects |
| **Parallel Workflow** | Distribute tasks to multiple agents |
| **Auto-Apply** | Automatically load memory for every project |

---

## 📂 Folder Structure

```
ai-context-master/
├── SOUL.md                    # Identity & Constraints
├── USER.md                   # User Preferences
├── GOVERNANCE.md             # Policy Rules
├── RULES.md                  # Operating Procedures
├── COORDINATION.md           # Multi-Agent Workflow
├── WORKFLOW.md               # Task Distribution
├── CH.md                     # Context Hub Guide
├── MEMORY.md                 # Long-term Knowledge
├── START.md                  # Quick Reference
├── ULTIMATE_PROMPT.md        # Agent Factory Prompt
├── AI_CONTEXT_MASTER.md       # System Prompt for AI Agents ⭐ NEW
├── HEARTBEAT.md             # Session Tracker
├── memory/                   # Daily Logs
├── context-hub/             # API Docs Cache
├── MemoryOS/                 # Full Memory OS
│   ├── decisions/
│   ├── lessons/
│   ├── projects/
│   └── tasks/
├── .claude/agents/           # Subagents
│   ├── crypto-orchestrator.json
│   ├── ccxt-trader.json
│   ├── supabase-engineer.json
│   ├── backtest-analyst.json
│   ├── deploy-specialist.json
│   └── research-specialist.json
└── Parallel/                 # Multi-project Workspace
```

---

## 🛠️ Installation

### Step 1: Clone and Open in VS Code

```bash
# Clone repo
git clone <repo-url>
cd ai-context-master

# Open in VS Code
code .
```

### Step 2: Install Tools

```bash
# Context Hub (API Docs)
npm install -g chub-dev

# MemoryOS (Full Memory OS)
# Already included - no installation needed:
cd MemoryOS
node bin/memoryos init
```

### Step 3: Apply Settings

```powershell
# Run auto-install script
cd .vscode
.\install-settings.ps1
```

**Or manually:**
1. `Ctrl+Shift+P` → "Preferences: Open User Settings (JSON)"
2. Add contextFiles to settings

---

## 📖 How to Use

### 1. Start Agent

Open Claude Code in VS Code:
```
Ctrl+Shift+P → "Claude Code"
```

Agent will automatically read:
- SOUL.md → Identity
- USER.md → Preferences
- GOVERNANCE.md → Rules
- MEMORY.md → Knowledge

### 2. Use Context Hub

```bash
# Lookup API
chub search "OpenAI Python"
chub get [DOC_ID] --lang python
```

### 3. Use MemoryOS

```bash
# Restore context
memoryos wake

# Remember
memoryos capture "Key decision: ..."

# Save checkpoint
memoryos checkpoint --working-on "next task"
```

### 4. Use Subagents

Copy prompt from `ULTIMATE_PROMPT.md` into Claude Code:

```
🚀 FULLSTACK CRYPTO AGENT FACTORY ACTIVATED 🚀

1. LOAD MEMORY: memoryos wake --profile crypto
2. SPAWN AGENTS: ccxt-trader, supabase-engineer
3. CONTEXT HUB: chub search "CCXT Python"
4. TASK: [Your task]
5. SAVE: memoryos checkpoint
```

---

## 🎯 Benefits

### Safety

| Benefit | Details |
|---------|---------|
| ✅ No data deletion without backup | Agent must backup before any delete operation |
| ✅ No production modification without test | Must test at staging first |
| ✅ Approval for large operations | >100 records need human approval |
| ✅ Clear stop conditions | Policy conflict, backup failure, data loss |

### Performance

| Benefit | Details |
|---------|---------|
| ✅ Parallel processing | Large tasks automatically split to multiple agents |
| ✅ Auto context load | No need to paste prompt every time |
| ✅ Quick reference | START.md for quick access |

### Cost Savings

| Benefit | Details |
|---------|---------|
| ✅ Token optimization | Cached prompts, concise outputs |
| ✅ Context Hub | No hallucination → less retry |
| ✅ Memory reuse | No need to explain again every session |

### Accuracy

| Benefit | Details |
|---------|---------|
| ✅ API docs from Context Hub | Use correct parameters |
| ✅ Multi-agent validation | Multiple agents verify |
| ✅ Governance rules | Always enforced |

---

## 📊 Comparison

### Before and After Using AI Context Master

| Criteria | Before | After |
|----------|--------|-------|
| Agent remembers context | ❌ Forgets after each session | ✅ Remembers with MemoryOS |
| API lookup | ❌ Hallucination | ✅ Context Hub |
| Large tasks | ❌ Sequential | ✅ Parallel with Subagents |
| Rules compliance | ❌ May violate | ✅ Always enforced |

---

## 🔧 Detailed Workflow

### Task Distribution Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  STEP 1: ANALYZE WORKLOAD                                 │
│  □ Read requirements                                       │
│  □ Identify independent modules                             │
│  □ Identify dependencies                                   │
├─────────────────────────────────────────────────────────────┤
│  STEP 2: DISTRIBUTE TO AGENTS                             │
│  □ Create task envelope                                    │
│  □ Assign context to each agent                            │
│  □ Set constraints & deadline                              │
├─────────────────────────────────────────────────────────────┤
│  STEP 3: EXECUTE IN PARALLEL                             │
│  □ Launch all agents parallel                              │
│  □ Track progress                                         │
│  □ Handle errors                                          │
├─────────────────────────────────────────────────────────────┤
│  STEP 4: VERIFY & MERGE                                  │
│  □ Verify outputs                                         │
│  □ Check dependencies                                     │
│  □ Merge results                                          │
├─────────────────────────────────────────────────────────────┤
│  STEP 5: REPORT                                          │
│  □ Summarize                                              │
│  □ Log to memory/                                         │
│  □ Report to user                                         │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Documentation Reference

| File | Description |
|------|-------------|
| `START.md` | Quick start guide |
| `SOUL.md` | Agent identity |
| `USER.md` | User preferences |
| `GOVERNANCE.md` | Policy rules |
| `MEMORY.md` | Project knowledge |
| `WORKFLOW.md` | Task distribution |
| `ULTIMATE_PROMPT.md` | Agent factory prompt |
| `MemoryOS/SETUP.md` | MemoryOS guide |

---

## 🧪 Testing

```bash
# Test Context Hub
chub search "OpenAI"

# Test MemoryOS
cd MemoryOS
node bin/memoryos wake
node bin/memoryos capture "Test memory"

# Test Subagents
# Open Claude Code and paste prompt from ULTIMATE_PROMPT.md
```

---

## 🤝 Contributing

1. Fork the repo
2. Create new branch (`git checkout -b feature/xxx`)
3. Commit changes (`git commit -m 'Add xxx'`)
4. Push to branch (`git push origin feature/xxx`)
5. Create Pull Request

---

## 📄 License

MIT License

---

## 📞 Support

- Issues: Create issue on GitHub
- Documentation: See docs/ folder

---

**Made with ❤️ by Adam Wang + Claude Sonnet 4.6**
