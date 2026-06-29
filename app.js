const sharedSources = [
  {
    initials: "AB",
    name: "Anjanava Biswas",
    role: "Engineering leader",
    company: "Packt Agentic Engineering contributor",
    sourceType: "Interview",
    sourceTitle: "Agentic Engineering interview",
    date: "July 2026",
    relevantClaim:
      "Agent-generated code needs review for intent and system fit, not only whether tests pass.",
  },
  {
    initials: "AR",
    name: "Armin Ranjbaryan",
    role: "CTO",
    company: "Practitioner contributor",
    sourceType: "Expert insight",
    sourceTitle: "Agentic Engineering leadership note",
    date: "July 2026",
    relevantClaim:
      "Teams should increase agent autonomy only when ownership, review rituals, and escalation paths are clear.",
  },
  {
    initials: "BA",
    name: "Ben Auffarth",
    role: "Author / AI practitioner",
    company: "Packt author",
    sourceType: "Workshop",
    sourceTitle: "Building Reliable AI Agents with LangChain4j",
    date: "18 Jul 2026",
    relevantClaim:
      "Production agent workflows need bounded retries, explicit failure states, and tool-call budgets.",
  },
];

const suggestedQuestions = [
  "Should we allow AI agents to make multi-file changes in production code?",
  "How should my team review agent-generated pull requests?",
  "What are the hidden risks of using coding agents on large codebases?",
  "Should we use a single coding agent or a multi-agent workflow?",
  "How should teams manage context limits when agents work across large codebases?",
  "What do engineering leaders worry about with agentic coding?",
  "What is architectural drift in agent-generated code?",
  "How should we use agents for safety-critical embedded software?",
];

const expertWizardTypes = [
  {
    id: "video",
    tag: "VIDEO",
    label: "A video or screen recording",
    desc: "Loom, a talk, a demo — anything you can play.",
    recommendedHandoff: "upload",
    handoffs: ["upload", "link"],
  },
  {
    id: "writing",
    tag: "WRITING",
    label: "A blog post, draft, or notes",
    desc: "Published link, markdown file, working doc, or rough notes.",
    recommendedHandoff: "link",
    handoffs: ["link", "upload"],
  },
  {
    id: "talk",
    tag: "TALK",
    label: "A conference talk",
    desc: "Slides plus recording, or just the deck.",
    recommendedHandoff: "upload",
    handoffs: ["upload", "link"],
  },
  {
    id: "newsletter",
    tag: "ARCHIVE",
    label: "Newsletter back-issues",
    desc: "Point us at your newsletter or archive.",
    recommendedHandoff: "link",
    handoffs: ["link"],
  },
  {
    id: "interview",
    tag: "INTERVIEW",
    label: "A guided interview",
    desc: "No artifact needed. We ask the questions; you talk.",
    recommendedHandoff: "interview",
    handoffs: ["interview"],
  },
];

const expertMetrics = [
  {
    id: "reach",
    label: "Reach",
    value: "9,240",
    text: "Engineers across the Dispatch, the Guild and workshops.",
    detail:
      "Your contribution can surface inside Ground Truth answers, editorial dispatches, private Guild discussions, and applied workshops for engineering teams.",
  },
  {
    id: "attribution",
    label: "Attribution",
    value: "Always",
    text: "Every Ground Truth answer cites you by name and links back.",
    detail:
      "Your expert profile, source title, and claim trail stay attached to the answer so users know who the knowledge came from.",
  },
  {
    id: "royalties",
    label: "Future royalties",
    value: "Tracked",
    text: "Citation usage is tracked now; royalties begin when Ground Truth becomes paid.",
    detail:
      "Ground Truth is not a paid product yet. We track how often your content is cited so, when Ground Truth becomes paid, future royalties can be based on real usage.",
  },
];

const handoffOptions = [
  {
    id: "upload",
    label: "Drop a file",
    desc: "Video, audio, PDF, doc, markdown, slides.",
    outcome: "We ingest the asset, transcribe it if needed, and return a clean claim preview.",
  },
  {
    id: "link",
    label: "Paste a link",
    desc: "YouTube, Loom, blog, Substack, repo, docs, deck.",
    outcome: "We preserve the canonical source URL and cite the original location in answers.",
  },
  {
    id: "interview",
    label: "Ask us to interview you",
    desc: "We create the outline and capture the useful claims.",
    outcome: "A producer schedules a guided session and turns the conversation into approved claims.",
  },
];

const usageOptions = [
  {
    id: "corpus",
    label: "Ground Truth corpus",
    desc: "Cited in answers · attribution and future citation tracking",
    impact: "Your claims become answer material with source detail and expert attribution.",
  },
  {
    id: "dispatch",
    label: "Agentic Dispatch newsletter",
    desc: "If the content is strong, we could invite you to write a full issue.",
    impact: "Strong material can become a bylined Agentic Dispatch issue sent to the audience.",
  },
  {
    id: "workshop",
    label: "Workshop material",
    desc: "Could lead to hosting a paid workshop.",
    impact: "Strong applied material can become a workshop segment or paid expert session.",
  },
  {
    id: "book",
    label: "Book",
    desc: "Could lead to authoring a book.",
    impact: "Deep, structured expertise can become a book proposal or authoring opportunity.",
  },
];

const nextStepOptions = [
  {
    id: "review",
    label: "NEXT",
    text: "A producer reviews and replies with a plan",
    detail: "We confirm the topic, source format, attribution, and the cleanest packaging route.",
  },
  {
    id: "approve",
    label: "THEN",
    text: "You approve the edit and how it's credited",
    detail: "Nothing goes live until you have seen the claim set and source attribution.",
  },
  {
    id: "live",
    label: "LIVE",
    text: "You're a cited expert · citation usage starts tracking",
    detail: "Your dashboard shows where the contribution appears, how often it is cited, and the usage trail that can support future royalties.",
  },
];

const answers = {
  "multi-file-production-code": {
    id: "multi-file-production-code",
    question: "Should we allow AI agents to make multi-file changes in production code?",
    outcome: "ground-truth-answer",
    layout: "expert-decision-answer",
    directAnswer:
      "The expert consensus is that teams can allow AI agents to make multi-file changes, but not as unrestricted autonomous changes. The shared concern is not whether the code works locally, but whether it preserves architecture, dependencies, and team ownership. The common expert position is that teams should review the agent's plan before implementation, not only the final pull request.",
    recommendedRoute: {
      title: "Controlled autonomy",
      summary:
        "Start with scoped multi-file changes, but require the agent to produce an implementation plan before writing code. This gives the team productivity gains without giving up control over architecture, dependencies, and ownership.",
    },
    approaches: [
      {
        title: "Conservative adoption",
        summary:
          "Use agents only for narrow, well-scoped changes until the team has mature review standards.",
        bestFor: [
          "Teams early in adoption",
          "Weak test coverage",
          "High-risk production systems",
        ],
        mainRisk: "Safest route, but limits productivity gains.",
        expertSourceSupport:
          "Supported by practitioners who emphasise human ownership, small pull requests, and review maturity before increasing agent autonomy.",
        ctaLabel: "Use safest route",
        selectedOutput: {
          whyThisFits:
            "This route protects teams that have not yet learned the failure patterns of agentic coding. It favors small, observable wins over broad autonomy.",
          checklist: [
            "Limit agents to one bounded task at a time",
            "Cap the number of files changed per request",
            "Require a human-authored acceptance criterion",
            "Reject unexplained dependency or abstraction changes",
            "Merge only when a named engineer can explain the diff",
          ],
          policySnippet:
            "Agent-generated changes are limited to scoped tasks with small diffs, explicit human acceptance criteria, and named code ownership before merge.",
          agentPrompt:
            "Before editing, restate the task boundary, list the minimum files you expect to touch, and ask for approval if the work expands beyond that scope.",
        },
      },
      {
        title: "Controlled autonomy",
        summary:
          "Allow agents to make scoped multi-file changes, but only after a human reviews the implementation plan.",
        bestFor: [
          "Teams with strong tech leads",
          "Codebases with reasonable tests",
          "Tasks with clear boundaries",
          "Teams that want productivity gains without losing architectural control",
        ],
        mainRisk: "Adds review overhead, but keeps humans in control of intent and architecture.",
        expertSourceSupport:
          "Supported by practitioner commentary that AI agents are strong at implementation but still require steering, review, and architectural judgment.",
        ctaLabel: "Use balanced route",
        selectedOutput: {
          whyThisFits:
            "This gives the team productivity gains from agentic coding while preserving human control over architecture, dependencies, and ownership.",
          checklist: [
            "Start with scoped multi-file tasks",
            "Require implementation plan before code",
            "Review affected files before execution",
            "Require test explanation",
            "Review dependency changes manually",
            "Keep PR size small enough for human review",
            "Assign human ownership before merge",
          ],
          policySnippet:
            "Agent-generated multi-file changes must include an implementation plan, affected files list, architectural assumptions, dependency risks, and test explanation. A human reviewer remains responsible for the merged code.",
          agentPrompt:
            "Before making changes, explain the architectural intent, list the files and abstractions you expect to modify, identify dependency or ownership risks, and ask clarifying questions before writing code. Do not begin implementation until the plan is reviewed.",
        },
      },
      {
        title: "High-autonomy workflow",
        summary:
          "Broader autonomy can work when teams have strong automated checks, observability, bounded execution, and clear escalation points.",
        bestFor: [
          "Mature teams",
          "Strong CI/CD",
          "Strong test coverage",
          "Clear ownership rules",
          "Teams that already understand agent failure patterns",
        ],
        mainRisk: "Highest productivity upside, but highest risk if review and rollback systems are weak.",
        expertSourceSupport:
          "Supported only where teams already have strong automation, observability, and review discipline.",
        ctaLabel: "Use fastest route",
        selectedOutput: {
          whyThisFits:
            "This route is viable only when the organization already has strong automated gates and reviewers who can spot system-level drift quickly.",
          checklist: [
            "Enforce CI, linting, security, and ownership gates",
            "Require automated summaries of architecture impact",
            "Escalate large diffs to senior review",
            "Track rollback rate and reviewer override rate",
            "Run periodic audits of agent-authored changes",
          ],
          policySnippet:
            "High-autonomy agent work is allowed only behind automated quality gates, explicit human escalation thresholds, and periodic architecture review.",
          agentPrompt:
            "Execute within the approved scope. Stop and escalate if the change crosses ownership boundaries, creates a new abstraction, changes dependencies, or causes tests to require reinterpretation.",
        },
      },
    ],
    tradeoffs: {
      columns: ["Approach", "Best for", "Upside", "Risk"],
      rows: [
        ["Conservative adoption", "Early teams, weak tests, high-risk systems", "Safest starting point", "Slower productivity gains"],
        ["Controlled autonomy", "Mature review process, clear ownership", "Best balance of speed and control", "Adds review overhead"],
        ["High autonomy", "Strong CI/CD, strong tests, mature teams", "Highest productivity upside", "Hidden architectural drift"],
      ],
    },
    citedFrom: sharedSources,
    agentPrompt:
      "Classify the task by scope, files affected, architectural assumptions, dependency risk, and test expectations. Ask for plan review before implementation.",
    followUpActions: [
      "Use safest route",
      "Use balanced route",
      "Use fastest route",
      "Turn into team checklist",
    ],
  },
  "review-agent-generated-prs": {
    id: "review-agent-generated-prs",
    question: "How should my team review agent-generated pull requests?",
    outcome: "ground-truth-answer",
    layout: "expert-playbook-answer",
    directAnswer:
      "Use a two-stage review. First review the agent's plan before implementation. Then review the pull request after implementation. Do not rely only on the final diff.",
    workflow: [
      "Start with a reviewed implementation plan before code is written.",
      "Confirm intended behavior, affected files, architecture assumptions, and dependency risks.",
      "Keep generated pull requests small enough for meaningful human review.",
      "Review tests for what they prove, not only whether they pass.",
      "Assign a human owner who can explain and evolve the merged code.",
    ],
    guardrails: [
      { guardrail: "Plan before code", purpose: "Prevents the agent from interpreting the task incorrectly" },
      { guardrail: "Small PR size", purpose: "Keeps human review realistic" },
      { guardrail: "Explicit affected files", purpose: "Makes scope visible before execution" },
      { guardrail: "Dependency review", purpose: "Prevents unnecessary package or abstraction changes" },
      { guardrail: "Test meaning review", purpose: "Ensures tests prove the right behaviour" },
      { guardrail: "Human ownership", purpose: "Makes a person accountable for merged output" },
    ],
    tradeoffs: {
      columns: ["Review point", "Question to ask", "Failure avoided"],
      rows: [
        ["Task interpretation", "What did the agent think the task was?", "Solving the wrong problem"],
        ["Architecture fit", "What architecture did it assume?", "Pattern drift"],
        ["Dependency impact", "Did it introduce new dependencies?", "Dependency creep"],
        ["Test meaning", "Do tests prove the intended behavior?", "False assurance"],
        ["Ownership", "Can a human explain the final code?", "Unowned change"],
      ],
    },
    checklist: [
      "What did the agent think the task was?",
      "What architecture did it assume?",
      "What files did it touch?",
      "Did it introduce new dependencies?",
      "Did it follow existing patterns?",
      "Are tests meaningful?",
      "Can a human explain the final code?",
    ],
    policySnippet:
      "Agent-generated pull requests must include an implementation plan, affected files list, risk notes, and test explanation. The human reviewer remains responsible for code ownership after merge.",
    citedFrom: sharedSources,
    agentPrompt:
      "Create a pull request plan before making changes. Include the intended behaviour, files likely to change, architectural assumptions, dependency risks, and tests required. Wait for review before implementation.",
    followUpActions: [
      "Turn into team checklist",
      "Turn into team policy",
      "Turn into agent prompt",
      "Show expert disagreements",
    ],
  },
  "hidden-risks-large-codebases": {
    id: "hidden-risks-large-codebases",
    question: "What are the hidden risks of using coding agents on large codebases?",
    outcome: "ground-truth-answer",
    layout: "expert-risk-answer",
    directAnswer:
      "The hidden risk is not that the agent writes bad code in an obvious way. The hidden risk is that it makes locally reasonable changes without understanding system-level constraints, ownership boundaries, or long-term maintainability concerns.",
    failureModes: [
      { failureMode: "Context loss", warningSign: "Agent changes code without referencing adjacent modules", mitigation: "Provide explicit repo context and constraints" },
      { failureMode: "Architectural drift", warningSign: "New patterns appear that do not match the codebase", mitigation: "Require plan-first review" },
      { failureMode: "Dependency creep", warningSign: "New package or abstraction added without clear reason", mitigation: "Manually review dependency changes" },
      { failureMode: "Review fatigue", warningSign: "Large generated PRs get approved too quickly", mitigation: "Keep agent PRs small" },
      { failureMode: "Ownership ambiguity", warningSign: "Team cannot explain why the code is shaped that way", mitigation: "Assign human ownership before merge" },
    ],
    riskPriority:
      "The highest-priority risk to control first is architectural drift. It is harder to detect than failing tests because the code can work locally while still weakening the system design.",
    citedFrom: sharedSources,
    agentPrompt:
      "Review this planned change for hidden risks. Identify context gaps, architectural drift, dependency creep, review burden, and ownership ambiguity. If any risk is present, ask clarifying questions before writing or modifying code.",
    followUpActions: [
      "Turn into risk checklist",
      "Show mitigation plan",
      "Show rollout guardrails",
    ],
  },
  "single-vs-multi-agent": {
    id: "single-vs-multi-agent",
    question: "Should we use a single coding agent or a multi-agent workflow?",
    outcome: "ground-truth-answer",
    layout: "expert-comparison-answer",
    directAnswer:
      "Start with a single-agent workflow unless the team has a clear reason to split responsibilities. Multi-agent workflows can add value when tasks require separate planning, implementation, review, and testing roles, but they also add orchestration overhead.",
    tradeoffs: {
      columns: ["Approach", "Best for", "Main risk"],
      rows: [
        ["Single agent workflow", "Smaller tasks, early adoption, simpler review", "Agent may miss blind spots"],
        ["Multi-agent workflow", "Complex tasks with clear role separation", "Coordination overhead and harder debugging"],
        ["Human plus agent reviewer", "Production-sensitive work", "Slower, but safer"],
      ],
    },
    approaches: [
      {
        title: "Single agent workflow",
        summary: "Fast setup, low coordination cost, and easier mental model for early team adoption.",
        bestFor: ["Smaller tasks", "First adoption phase", "Teams still defining review rules"],
        mainRisk: "Blind spots stay inside one model trajectory.",
        expertSourceSupport: "Supported where teams need to master basic agent use before orchestration.",
        ctaLabel: "Use simpler default",
      },
      {
        title: "Multi-agent workflow",
        summary: "Split planning, implementation, review, and testing into explicit roles.",
        bestFor: ["Complex tasks", "Clear role separation", "Mature delivery process"],
        mainRisk: "Coordination overhead and harder debugging.",
        expertSourceSupport: "Supported when role boundaries can be defined and measured.",
        ctaLabel: "Use role split",
      },
      {
        title: "Human plus agent reviewer",
        summary: "Use an agent as a reviewer, but keep the human responsible for final judgment.",
        bestFor: ["Production-sensitive work", "Architecture changes", "Security-sensitive diffs"],
        mainRisk: "Slower review cycle.",
        expertSourceSupport: "Supported where source material emphasizes ownership and review accountability.",
        ctaLabel: "Use safer hybrid",
      },
    ],
    recommendedRoute: {
      title: "Single agent plus mandatory plan review",
      summary:
        "Start with a single agent plus mandatory plan review. Move to multi-agent workflows only when the team can define separate roles clearly and measure whether the added complexity improves output quality.",
    },
    expertDisagreement:
      "Experts differ on whether multi-agent orchestration should be introduced early. Some favour it because it makes planning and review explicit. Others prefer a simpler single-agent workflow because premature orchestration can create complexity before the team has mastered basic agent use.",
    citedFrom: sharedSources,
    agentPrompt:
      "Classify this task by complexity, risk, number of files affected, and review requirements. Recommend whether a single-agent or multi-agent workflow is appropriate, and explain the trade-off.",
    followUpActions: [
      "Start with single-agent workflow",
      "Explore multi-agent setup",
      "Use human plus agent reviewer",
      "Turn into decision checklist",
    ],
  },
  "context-limits-large-codebase": {
    id: "context-limits-large-codebase",
    question: "How should teams manage context limits when agents work across large codebases?",
    outcome: "ground-truth-answer",
    layout: "expert-playbook-answer",
    directAnswer:
      "Treat context as a managed engineering artifact. Do not ask the agent to infer the whole codebase. Give it scoped maps, ownership boundaries, relevant files, and explicit constraints before implementation.",
    workflow: [
      "Start with a repository orientation step that identifies relevant modules and owners.",
      "Ask the agent to list what it has not inspected before proposing a plan.",
      "Provide architecture constraints and examples of existing patterns.",
      "Make the agent produce a file-level plan and context gap list.",
      "Review the plan before allowing edits, then require a final context summary in the PR.",
    ],
    guardrails: [
      { guardrail: "Context inventory", purpose: "Shows what the agent has and has not seen" },
      { guardrail: "Owned boundaries", purpose: "Prevents changes crossing team ownership without review" },
      { guardrail: "Pattern examples", purpose: "Anchors generated code to existing codebase style" },
      { guardrail: "Gap declaration", purpose: "Forces uncertainty into the open" },
      { guardrail: "Plan-first edits", purpose: "Stops broad changes from starting on partial context" },
    ],
    citedFrom: sharedSources,
    agentPrompt:
      "Before implementation, map the relevant modules, list files inspected, identify context gaps, summarize architecture constraints, and ask for missing information before editing.",
    followUpActions: [
      "Turn into team policy",
      "Turn into agent prompt",
      "Show review checklist",
    ],
  },
  "engineering-leaders-worries": {
    id: "engineering-leaders-worries",
    question: "What do engineering leaders worry about with agentic coding?",
    outcome: "ground-truth-answer",
    layout: "expert-roundtable-answer",
    directAnswer:
      "The main concern is not whether agents can generate code. The concern is whether engineering teams can maintain control over review quality, architecture, and ownership as agents take on larger tasks.",
    expertPositions: [
      { position: "Conservative adoption", summary: "Keep agents on scoped tasks until review maturity improves.", bestSuitedFor: "Teams early in adoption", tradeoff: "Lower risk, but slower productivity gains." },
      { position: "Plan-first adoption", summary: "Let agents handle larger tasks only after a reviewed implementation plan.", bestSuitedFor: "Teams with strong tech leads", tradeoff: "Adds review overhead, but protects architectural intent." },
      { position: "High-autonomy adoption", summary: "Allow agents to work broadly with automated checks and human escalation.", bestSuitedFor: "Mature teams with strong review systems", tradeoff: "Higher productivity potential, but greater risk if automation and ownership are weak." },
    ],
    expertDisagreement:
      "Experts differ on how quickly teams should increase agent autonomy. Some emphasise productivity gains. Others worry that teams may lose architectural control if agents are given too much scope too quickly.",
    recommendedRoute: {
      title: "Ground Truth synthesis",
      summary:
        "The strongest practical view is that teams should increase agent autonomy only as their review, ownership, testing, and rollback practices mature.",
    },
    citedFrom: sharedSources,
    agentPrompt:
      "Summarize the adoption risk in terms of review quality, architecture control, human ownership, deployment safety, and long-term maintainability.",
    followUpActions: [
      "Show where experts disagree",
      "Show the safest interpretation",
      "Show adoption principles",
    ],
  },
  "architectural-drift-explainer": {
    id: "architectural-drift-explainer",
    question: "What is architectural drift in agent-generated code?",
    outcome: "ground-truth-answer",
    layout: "expert-explainer-answer",
    explanation: {
      plainLanguage:
        "Architectural drift happens when agent-generated changes are technically correct in isolation but gradually move the codebase away from the design patterns, boundaries, or ownership model the team intended.",
      whyItMatters:
        "The code may pass tests and still make the system harder to maintain, extend, or reason about.",
      commonMistake:
        "Teams often review only whether the generated code works, not whether it fits the architecture.",
      example:
        "An agent may solve a bug by adding logic to a convenient file instead of preserving the existing separation between domain logic and infrastructure code.",
    },
    relatedQuestions: [
      "How should teams review agent-generated pull requests?",
      "What are the hidden risks of coding agents on large codebases?",
      "How can teams prevent architectural drift?",
    ],
    citedFrom: sharedSources,
    agentPrompt:
      "Review the proposed diff for architectural drift. Compare it against existing boundaries, naming conventions, ownership rules, dependency direction, and nearby patterns.",
    followUpActions: [
      "Show related risks",
      "Show implementation guidance",
      "Ask a deeper question",
    ],
  },
  "safety-critical-embedded": {
    id: "safety-critical-embedded",
    question: "How should we use agents for safety-critical embedded software?",
    outcome: "no-ground-truth-answer",
    layout: "no-ground-truth-answer",
    citedFrom: [],
    followUpActions: ["Submit to curation queue", "Ask a related question", "Notify me when covered"],
    noAnswer: {
      heading: "We do not have a Ground Truth answer yet",
      explanation:
        "Ground Truth only answers from attributed expert sources. We do not yet have enough expert material to answer this responsibly, so we will not generate a generic answer and present it as Ground Truth.",
      formFields: [
        "What question are you trying to answer?",
        "What decision are you trying to make?",
        "What kind of expert would you trust?",
        "How urgent is this?",
        "Would you like to be notified when we add coverage?",
      ],
    },
  },
};

const routes = [
  { keywords: ["multi-file", "production code"], answerId: "multi-file-production-code" },
  { keywords: ["pull request", "review"], answerId: "review-agent-generated-prs" },
  { keywords: ["prs", "review"], answerId: "review-agent-generated-prs" },
  { keywords: ["hidden risks", "large codebase"], answerId: "hidden-risks-large-codebases" },
  { keywords: ["hidden risks", "large codebases"], answerId: "hidden-risks-large-codebases" },
  { keywords: ["single coding agent", "multi-agent"], answerId: "single-vs-multi-agent" },
  { keywords: ["single-agent", "multi-agent"], answerId: "single-vs-multi-agent" },
  { keywords: ["context limits", "large codebase"], answerId: "context-limits-large-codebase" },
  { keywords: ["context limits", "large codebases"], answerId: "context-limits-large-codebase" },
  { keywords: ["engineering leaders", "worry"], answerId: "engineering-leaders-worries" },
  { keywords: ["engineering leaders", "worried"], answerId: "engineering-leaders-worries" },
  { keywords: ["architectural drift"], answerId: "architectural-drift-explainer" },
  { keywords: ["safety-critical", "embedded"], answerId: "safety-critical-embedded" },
];

const state = {
  authMode: "logged-out",
  expertStep: 1,
  expertWizardType: "video",
  expertMetric: "reach",
  expertHandoff: "upload",
  expertUploadedFile: "",
  expertLink: "",
  expertProfile: {
    name: "",
    email: "",
    profileUrl: "",
  },
  expertUsage: {
    corpus: true,
    dispatch: true,
    workshop: false,
    book: false,
  },
  expertNextStep: "review",
  query: "",
  answer: null,
  selectedApproach: 1,
  followUp: "",
  curationSubmitted: false,
  feedback: {},
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function routeQuestion(question) {
  const normalized = question.toLowerCase().replaceAll("?", "");
  const match = routes.find((route) =>
    route.keywords.every((keyword) => normalized.includes(keyword.toLowerCase())),
  );
  return match ? answers[match.answerId] : createNoAnswer(question);
}

function createNoAnswer(question) {
  return {
    id: "unmatched-question",
    question,
    outcome: "no-ground-truth-answer",
    layout: "no-ground-truth-answer",
    citedFrom: [],
    followUpActions: ["Ask a related question", "Submit to curation queue"],
    noAnswer: answers["safety-critical-embedded"].noAnswer,
  };
}

function LoggedInGroundTruthApp() {
  return `
    <main class="app-shell">
      ${AppHeader()}
      <section class="member-workspace">
        ${AskConsole()}
      </section>
    </main>
  `;
}

function LoggedOutGroundTruthApp() {
  return `
    <main class="app-shell">
      ${AppHeader()}
      <section class="logged-out-grid">
        <section class="panel logged-out-hero">
          <div>
            <p class="kicker">Ground Truth</p>
            <h1>Answers from people who've done it — not from a foundation model.</h1>
            <p class="lead">Ask a question and get a practitioner-grounded answer, cited back to the expert, the talk or the book it came from. The newest applied knowledge, the parts no general model has seen yet.</p>
            <ul class="trust-list">
              <li>Grounded in our experts' real production work</li>
              <li>Every claim cited to a person and a source</li>
              <li>Updated as the field — and the team — moves</li>
            </ul>
          </div>
          <div class="auth-cta-row">
            <button class="ask-button" data-auth-mode="logged-in">Sign in to ask Ground Truth</button>
            <button class="small-button muted-button" data-auth-mode="logged-in">View member workspace</button>
          </div>
        </section>
        ${ProductDemoVideo()}
      </section>
    </main>
  `;
}

function GroundTruthApp() {
  if (state.authMode === "experts") {
    return ExpertParticipationApp();
  }
  return state.authMode === "logged-out" ? LoggedOutGroundTruthApp() : LoggedInGroundTruthApp();
}

function AppHeader() {
  return `
    <header class="app-topbar">
      <div>
        <div class="kicker">Ground Truth</div>
        <div class="mini-meta">Expert-backed agentic engineering corpus</div>
      </div>
      <div class="auth-switch" aria-label="Prototype view">
        <button class="${state.authMode === "logged-out" ? "is-active" : ""}" data-auth-mode="logged-out">Logged out</button>
        <button class="${state.authMode === "logged-in" ? "is-active" : ""}" data-auth-mode="logged-in">Logged in</button>
        <button class="${state.authMode === "experts" ? "is-active" : ""}" data-auth-mode="experts">Experts</button>
      </div>
    </header>
  `;
}

function ExpertParticipationApp() {
  return `
    <main class="app-shell">
      ${AppHeader()}
      <section class="expert-destination">
        ${ExpertContributionHero()}
        ${ExpertContributionWizard()}
      </section>
    </main>
  `;
}

function ExpertContributionHero() {
  return `
    <section class="expert-hero-section">
      <p class="kicker">For practitioners · become a contributor</p>
      <h1>You've already solved the hard part. Get credited — and discovered — for what you know.</h1>
      <p class="lead">Send us a practitioner insight in <span>any format</span> — a video, a Loom, a blog draft, a talk recording, even raw notes. We turn it into reach and attribution: cited in Ground Truth, featured in the Dispatch, and tracked for future royalty eligibility when Ground Truth becomes paid.</p>
      <div class="expert-metric-strip">
        ${expertMetrics.map((item) => `
          <button class="metric-card ${item.id === "royalties" ? "is-future" : ""} ${state.expertMetric === item.id ? "is-active" : ""}" type="button" data-expert-metric="${escapeHtml(item.id)}">
            <span>${escapeHtml(item.label)}</span>
            <strong>${escapeHtml(item.value)}</strong>
            <p>${escapeHtml(item.text)}</p>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function ExpertContributionWizard() {
  return `
    <section id="apply" class="expert-wizard-section">
      <aside class="expert-stepper-panel">
        <p class="eyebrow">Submit in 2 minutes</p>
        ${ExpertStepper()}
        <div class="no-production-note">
          <div class="label">No production work needed</div>
          <p>Our team edits, formats and packages everything. You bring the insight; we do the rest.</p>
        </div>
      </aside>
      <div class="expert-wizard-panel">
        ${ExpertWizardStep()}
      </div>
    </section>
  `;
}

function ExpertStepper() {
  const steps = [
    ["Pick a format", "Whatever you already have"],
    ["Add the content", "Upload, link, or hand off"],
    ["Usage & attribution", "Where it runs, how you're credited"],
    ["Done", "We take it from here"],
  ];
  return `
    <div class="expert-stepper">
      ${steps.map(([label, desc], index) => {
        const step = index + 1;
        const done = state.expertStep > step;
        const active = state.expertStep === step;
        return `
          <button class="${done ? "is-done" : ""} ${active ? "is-active" : ""}" data-expert-step="${step}">
            <span>${done ? "✓" : step}</span>
            <div>
              <strong>${escapeHtml(label)}</strong>
              <p>${escapeHtml(desc)}</p>
            </div>
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function ExpertWizardStep() {
  if (state.expertStep === 1) return ExpertWizardPickFormat();
  if (state.expertStep === 2) return ExpertWizardAddContent();
  if (state.expertStep === 3) return ExpertWizardUsage();
  return ExpertWizardDone();
}

function selectedWizardType() {
  return expertWizardTypes.find((type) => type.id === state.expertWizardType) || expertWizardTypes[0];
}

function allowedHandoffOptions(type = selectedWizardType()) {
  const allowed = type.handoffs || handoffOptions.map((option) => option.id);
  return handoffOptions.filter((option) => allowed.includes(option.id));
}

function normalizeExpertHandoff() {
  const type = selectedWizardType();
  if (!type.handoffs?.includes(state.expertHandoff)) {
    state.expertHandoff = type.recommendedHandoff || allowedHandoffOptions(type)[0]?.id || "upload";
  }
}

function selectedExpertMetric() {
  return expertMetrics.find((metric) => metric.id === state.expertMetric) || expertMetrics[0];
}

function selectedHandoff() {
  normalizeExpertHandoff();
  return handoffOptions.find((option) => option.id === state.expertHandoff) || handoffOptions[0];
}

function selectedUsageOptions() {
  return usageOptions.filter((option) => state.expertUsage[option.id]);
}

function selectedNextStep() {
  return nextStepOptions.find((step) => step.id === state.expertNextStep) || nextStepOptions[0];
}

function ExpertWizardPickFormat() {
  const type = selectedWizardType();
  return `
    <div class="wizard-step">
      <h2>What are you sharing?</h2>
      <p>Pick whatever you already have. Format genuinely doesn't matter.</p>
      <div class="wizard-type-grid">
        ${expertWizardTypes.map((type) => `
          <button class="wizard-type-card ${state.expertWizardType === type.id ? "is-active" : ""}" data-expert-type="${escapeHtml(type.id)}">
            <div>
              <span>${escapeHtml(type.tag)}</span>
              <i>${state.expertWizardType === type.id ? "●" : ""}</i>
            </div>
            <strong>${escapeHtml(type.label)}</strong>
            <p>${escapeHtml(type.desc)}</p>
          </button>
        `).join("")}
      </div>
      <div class="compact-selection-row" aria-live="polite">
        <span>Selected: ${escapeHtml(type.label)}</span>
        <button class="submit-button" type="button" data-expert-next>Continue →</button>
      </div>
    </div>
  `;
}

function ExpertWizardAddContent() {
  const type = selectedWizardType();
  const handoff = selectedHandoff();
  const handoffs = allowedHandoffOptions(type);
  const requiresEmail = handoff.id === "interview";
  const canContinue = !requiresEmail || state.expertProfile.email.trim();
  return `
    <div class="wizard-step">
      <h2>Add your ${escapeHtml(type.label.toLowerCase())}.</h2>
      <p>Rough is fine. Choose the handoff that matches what you already have.</p>
      <div class="handoff-grid">
        ${handoffs.map((option) => `
          <button class="handoff-card ${state.expertHandoff === option.id ? "is-active" : ""}" type="button" data-expert-handoff="${escapeHtml(option.id)}">
            <strong>${escapeHtml(option.label)}</strong>
            <span>${escapeHtml(option.desc)}</span>
          </button>
        `).join("")}
      </div>
      ${HandoffInputPanel(handoff)}
      ${ExpertAttributionPanel(requiresEmail)}
      <div class="editorial-preview-box">
        <p>Our editorial team will review and extract relevant details, then reach out to you for final review and confirmation to use the material.</p>
      </div>
      <div class="wizard-button-row">
        <button class="submit-button ${canContinue ? "" : "is-disabled"}" type="button" data-expert-next ${canContinue ? "" : "disabled"}>Continue →</button>
        <button class="small-button muted-button" type="button" data-expert-back>← back</button>
      </div>
    </div>
  `;
}

function HandoffInputPanel(handoff) {
  if (handoff.id === "upload") {
    return `
      <label class="handoff-input-panel file-drop-zone ${state.expertUploadedFile ? "has-file" : ""}" data-file-drop-zone>
        <input type="file" data-expert-file />
        <strong>${state.expertUploadedFile ? escapeHtml(state.expertUploadedFile) : "Drop a file here, or browse"}</strong>
        <span>PDF, doc, markdown, slides, audio, or video. Drag-and-drop works here.</span>
      </label>
    `;
  }

  if (handoff.id === "link") {
    return `
      <div class="handoff-input-panel link-input-panel">
        <label for="expert-source-link">Paste the source link</label>
        <input id="expert-source-link" type="url" data-expert-link value="${escapeHtml(state.expertLink)}" placeholder="https://your-blog.com/post, YouTube, Loom, Substack, docs..." />
      </div>
    `;
  }

  return `
    <div class="handoff-input-panel interview-panel">
      <strong>We'll set up the interview.</strong>
      <span>Choose this if the knowledge is mostly in your head. Add your email below so a producer can reach out with a short outline and suggested times.</span>
    </div>
  `;
}

function ExpertAttributionPanel(requiresEmail = false) {
  return `
    <section class="attribution-input-panel">
      <div>
        <div class="label">Professional attribution</div>
        <p>We use this to credit you properly wherever your knowledge appears.</p>
      </div>
      <div class="profile-field-grid">
        <label>
          <span>Name</span>
          <input type="text" data-expert-profile="name" value="${escapeHtml(state.expertProfile.name)}" placeholder="Your name" />
        </label>
        <label>
          <span>Email${requiresEmail ? " · required for interview" : ""}</span>
          <input type="email" data-expert-profile="email" value="${escapeHtml(state.expertProfile.email)}" placeholder="you@company.com" />
        </label>
        <label>
          <span>LinkedIn, Twitter, or personal website</span>
          <input type="url" data-expert-profile="profileUrl" value="${escapeHtml(state.expertProfile.profileUrl)}" placeholder="https://linkedin.com/in/you, x.com/you, or your site" />
        </label>
      </div>
    </section>
  `;
}

function ExpertWizardUsage() {
  const selectedUsage = selectedUsageOptions();
  const selectedNames = selectedUsage.map((option) => option.label).join(", ") || "No destination selected";
  const canSubmit = selectedUsage.length > 0;
  return `
    <div class="wizard-step">
      <h2>Where it appears, and how you're credited.</h2>
      <p>Choose where we can use it. Reach and attribution are the primary promise; future royalty eligibility is tracked through citations.</p>
      <div class="usage-option-list">
        ${usageOptions.map((option) => `
          <button class="usage-option ${state.expertUsage[option.id] ? "is-selected" : ""}" type="button" data-expert-usage="${escapeHtml(option.id)}">
            <span>${state.expertUsage[option.id] ? "✓" : ""}</span>
            <div>
              <strong>${escapeHtml(option.label)}</strong>
              <p>${escapeHtml(option.desc)}</p>
            </div>
          </button>
        `).join("")}
      </div>
      <div class="earnings-note">
        <div class="label">Live contribution summary</div>
        <h3>${escapeHtml(selectedNames)}</h3>
        <p>${canSubmit ? "Your contribution is credited wherever it appears. Citation usage is tracked now so future royalties can be based on how often your content is used once Ground Truth becomes a paid or fully released product. You keep ownership of the original material and can keep publishing it anywhere else." : "Choose at least one destination so the team knows where this knowledge can be used."}</p>
        <div class="usage-impact-list">
          ${selectedUsage.map((option) => `<div><strong>${escapeHtml(option.label)}</strong><p>${escapeHtml(option.impact)}</p></div>`).join("")}
        </div>
      </div>
      <div class="wizard-button-row">
        <button class="submit-button ${canSubmit ? "" : "is-disabled"}" type="button" data-expert-next ${canSubmit ? "" : "disabled"}>Submit contribution →</button>
        <button class="small-button muted-button" type="button" data-expert-back>← back</button>
      </div>
    </div>
  `;
}

function ExpertWizardDone() {
  const type = selectedWizardType();
  const handoff = selectedHandoff();
  const usage = selectedUsageOptions();
  const nextStep = selectedNextStep();
  return `
    <div class="wizard-step wizard-done">
      <div class="done-mark">✓</div>
      <h2>Got it. The team will be in touch within 3 days.</h2>
      <p>We'll review, edit and package your ${escapeHtml(type.label.toLowerCase())} via ${escapeHtml(handoff.label.toLowerCase())}, then send a preview before anything goes live. Once it's in, you'll show up as a cited expert across ${escapeHtml(usage.map((option) => option.label).join(", ") || "the approved destinations")}.</p>
      <div class="submission-recap">
        <article>
          <span>Format</span>
          <strong>${escapeHtml(type.label)}</strong>
        </article>
        <article>
          <span>Handoff</span>
          <strong>${escapeHtml(handoff.label)}</strong>
        </article>
        <article>
          <span>Expert</span>
          <strong>${escapeHtml(state.expertProfile.name || "Attribution pending")}</strong>
        </article>
        <article>
          <span>Email</span>
          <strong>${escapeHtml(state.expertProfile.email || "Needed before publishing")}</strong>
        </article>
        <article>
          <span>Public profile</span>
          <strong>${escapeHtml(state.expertProfile.profileUrl || "Optional")}</strong>
        </article>
        <article>
          <span>Usage</span>
          <strong>${escapeHtml(usage.length)} destination${usage.length === 1 ? "" : "s"}</strong>
        </article>
      </div>
      <div class="next-steps-box">
        ${nextStepOptions.map((step) => `
          <button class="${state.expertNextStep === step.id ? "is-active" : ""}" type="button" data-expert-next-step="${escapeHtml(step.id)}">
            <span>${escapeHtml(step.label)}</span>
            <p>${escapeHtml(step.text)}</p>
          </button>
        `).join("")}
      </div>
      <aside class="next-step-detail" aria-live="polite">
        <div class="label">${escapeHtml(nextStep.label)} detail</div>
        <p>${escapeHtml(nextStep.detail)}</p>
      </aside>
      <div class="wizard-button-row">
        <button class="small-button muted-button" type="button" data-expert-reset>Submit another</button>
        <button class="small-button muted-button" type="button" data-auth-mode="logged-out">Back to site →</button>
      </div>
    </div>
  `;
}

function ProductDemoVideo() {
  return `
    <section class="panel product-demo-panel" aria-label="Looping Ground Truth product demo video">
      <header class="console-header">
        <h2>Ground Truth demo</h2>
        <span class="live-indicator">expert corpus active</span>
      </header>
      <div class="demo-video-shell">
        <video class="demo-video" autoplay muted loop playsinline preload="auto" poster="./assets/ground-truth-demo-poster.png" aria-label="Ground Truth product demo video"></video>
        <img class="demo-video-fallback" src="./assets/ground-truth-demo.gif" alt="Looping Ground Truth product demo showing a question, expert attribution, and suggested answer" />
      </div>
    </section>
  `;
}

function AskConsole() {
  return `
    <section class="panel console-panel" id="console">
      <header class="console-header">
        <h2>Ground Truth</h2>
        <span class="live-indicator">grounded corpus active</span>
      </header>
      <div class="console-body">
        ${QuestionInput()}
        ${AnswerWorkspace()}
      </div>
    </section>
  `;
}

function QuestionInput() {
  return `
    <form class="question-input" data-action="ask">
      <div class="prompt-row">
        <label class="prompt-prefix">
          <span>&gt;</span>
          <input value="${escapeHtml(state.query)}" name="query" placeholder="ask experts anything about agentic engineering" autocomplete="off" />
        </label>
        <button class="ask-button" type="submit">Ask corpus</button>
      </div>
    </form>
  `;
}

function SuggestedQuestions() {
  return `
    <section class="suggested-block">
      <p class="eyebrow">Suggested questions</p>
      <div class="chips">
        ${suggestedQuestions
          .slice(0, 5)
          .map((question) => `<button class="chip" data-question="${escapeHtml(question)}">${escapeHtml(question)}</button>`)
          .join("")}
      </div>
    </section>
  `;
}

function AskGroundTruthEmptyState() {
  return `
    <section class="answer-container">
      <div class="empty-console">
        Ask about agentic engineering adoption, review workflows, production risks, team policies, architecture drift, context limits, or where coding agents fit in real software delivery.
      </div>
      ${SuggestedQuestions()}
    </section>
  `;
}

function AnswerWorkspace() {
  if (!state.answer) {
    return AskGroundTruthEmptyState();
  }

  const answer = state.answer;
  return `
    <section class="answer-container">
      ${QuestionHeader(answer)}
      ${answer.outcome === "ground-truth-answer" ? ExpertPanel(answer.citedFrom) : ""}
      ${renderAnswerLayout(answer)}
      ${answer.outcome === "ground-truth-answer" ? CollapsedSourceDetail(answer.citedFrom) : ""}
      ${FollowUpActions(answer)}
      ${state.followUp ? MockFollowUp(answer, state.followUp) : ""}
      ${FeedbackPanel()}
    </section>
  `;
}

function AnswerContainer() {
  return AnswerWorkspace();
}

function QuestionHeader(answer) {
  return `
    <section class="answer-question">
      <div class="label">User question</div>
      <h3>${escapeHtml(answer.question)}</h3>
    </section>
  `;
}

function ExpertPanel(sources) {
  return `
    <section class="answer-section expert-panel">
      <h3>Answered using insights from</h3>
      <div class="expert-row">
        ${sources.map(ExpertAvatarCard).join("")}
      </div>
    </section>
  `;
}

function ExpertAvatarCard(source) {
  return `
    <article class="expert-avatar-card">
      ${ExpertPortrait(source)}
      <div>
        <strong>${escapeHtml(source.name)}</strong>
        <div class="mini-meta">${escapeHtml(source.role || "Expert contributor")}</div>
        <div class="mini-meta">${escapeHtml(source.date || "Fresh corpus source")}</div>
      </div>
    </article>
  `;
}

function ExpertPortrait(source) {
  return `
    <div class="expert-portrait expert-${escapeHtml(source.initials.toLowerCase())}" aria-label="${escapeHtml(source.name)} portrait">
      <span>${escapeHtml(source.initials)}</span>
    </div>
  `;
}

function renderAnswerLayout(answer) {
  switch (answer.layout) {
    case "expert-decision-answer":
      return ExpertDecisionAnswer(answer);
    case "expert-comparison-answer":
      return ExpertComparisonAnswer(answer);
    case "expert-risk-answer":
      return ExpertRiskAnswer(answer);
    case "expert-playbook-answer":
      return ExpertPlaybookAnswer(answer);
    case "expert-roundtable-answer":
      return ExpertRoundtableAnswer(answer);
    case "expert-explainer-answer":
      return ExpertExplainerAnswer(answer);
    case "no-ground-truth-answer":
      return NoGroundTruthAnswer(answer);
    default:
      return NoGroundTruthAnswer(createNoAnswer(answer.question));
  }
}

function ExpertDecisionAnswer(answer) {
  return DecisionPanel(answer);
}

function ExpertComparisonAnswer(answer) {
  return ComparisonBoard(answer);
}

function ExpertRiskAnswer(answer) {
  return RiskRegister(answer);
}

function ExpertPlaybookAnswer(answer) {
  return WorkflowPlaybook(answer);
}

function ExpertRoundtableAnswer(answer) {
  return ExpertPositionMap(answer);
}

function ExpertExplainerAnswer(answer) {
  return AttributedExplainer(answer);
}

function NoGroundTruthAnswer(answer) {
  return NoAnswerState(answer);
}

function DecisionPanel(answer) {
  return `
    <section class="answer-section">
      <h3>Expert discussion</h3>
      <div class="approach-grid">
        ${answer.approaches.map((approach, index) => ExpertApproachCard(approach, index)).join("")}
      </div>
    </section>
    <section class="answer-section">
      <h3>Consensus answer</h3>
      <p>${escapeHtml(answer.directAnswer)}</p>
    </section>
    <section class="answer-section route-block">
      <h3>Ground Truth suggested route: ${escapeHtml(answer.recommendedRoute.title)}</h3>
      <p>${escapeHtml(answer.recommendedRoute.summary)}</p>
    </section>
    <section class="answer-section route-choice-section">
      <h3>Choose your path</h3>
      ${state.selectedApproach === null ? `<p class="choice-empty">Select an expert position above to generate the checklist, policy snippet, and agent-ready prompt for that route.</p>` : SelectedPathExpansion(answer.approaches[state.selectedApproach])}
    </section>
  `;
}

function ComparisonBoard(answer) {
  return `
    <section class="answer-section">
      <h3>Expert discussion</h3>
      <div class="approach-grid">
        ${answer.approaches.map((approach, index) => ExpertOptionCard(approach, index)).join("")}
      </div>
    </section>
    ${answer.expertDisagreement ? `
      <section class="answer-section">
        <h3>Where experts differ</h3>
        <p>${escapeHtml(answer.expertDisagreement)}</p>
      </section>
    ` : ""}
    <section class="answer-section">
      <h3>Consensus answer</h3>
      <p>${escapeHtml(answer.directAnswer)}</p>
    </section>
    <section class="answer-section route-block">
      <h3>Ground Truth suggested default</h3>
      <p><strong>${escapeHtml(answer.recommendedRoute.title)}</strong></p>
      <p>${escapeHtml(answer.recommendedRoute.summary)}</p>
    </section>
  `;
}

function RiskRegister(answer) {
  return `
    ${ExpertDiscussionCards(answer.citedFrom)}
    <section class="answer-section">
      <h3>Risk summary</h3>
      <p>${escapeHtml(answer.directAnswer)}</p>
    </section>
    <section class="answer-section">
      <h3>Top failure modes</h3>
      ${TradeoffTable({
        columns: ["Failure mode", "Warning sign", "Mitigation"],
        rows: answer.failureModes.map((risk) => [risk.failureMode, risk.warningSign, risk.mitigation]),
      })}
    </section>
    <section class="answer-section route-block">
      <h3>Ground Truth risk priority</h3>
      <p>${escapeHtml(answer.riskPriority)}</p>
    </section>
    ${AgentPromptCard(answer.agentPrompt)}
  `;
}

function WorkflowPlaybook(answer) {
  return `
    ${ExpertDiscussionCards(answer.citedFrom)}
    <section class="answer-section">
      <h3>Recommended workflow</h3>
      <p>${escapeHtml(answer.directAnswer)}</p>
    </section>
    <section class="answer-section">
      <h3>Playbook</h3>
      <ol class="workflow-list">
        ${answer.workflow
          .map((step, index) => `<li><span class="step-number">${index + 1}</span><span>${escapeHtml(step)}</span></li>`)
          .join("")}
      </ol>
    </section>
    <section class="answer-section">
      <h3>Guardrails</h3>
      ${TradeoffTable({
        columns: ["Guardrail", "Purpose"],
        rows: answer.guardrails.map((guardrail) => [guardrail.guardrail, guardrail.purpose]),
      })}
    </section>
    ${answer.checklist ? `
      <section class="answer-section">
        <h3>Review checklist</h3>
        <ul class="plain-list">${answer.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </section>
    ` : ""}
    <section class="answer-section">
      <h3>Team policy snippet</h3>
      <div class="policy-snippet">${escapeHtml(answer.policySnippet || "Agent-generated work must include a plan, affected files list, risk notes, and test explanation. The human reviewer remains responsible for code ownership after merge.")}</div>
    </section>
    ${AgentPromptCard(answer.agentPrompt)}
  `;
}

function ExpertPositionMap(answer) {
  return `
    <section class="answer-section">
      <h3>Expert discussion</h3>
      <div class="position-grid">
        ${answer.expertPositions
          .map(
            (position) => `
              <article class="source-card">
                <h4>${escapeHtml(position.position)}</h4>
                <p>${escapeHtml(position.summary)}</p>
                <div class="label">Best suited for</div>
                <p>${escapeHtml(position.bestSuitedFor)}</p>
                <div class="label">Trade-off</div>
                <p>${escapeHtml(position.tradeoff || "Different teams will need different autonomy levels.")}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
    ${answer.expertDisagreement ? `
      <section class="answer-section">
        <h3>Where experts disagree</h3>
        <p>${escapeHtml(answer.expertDisagreement)}</p>
      </section>
    ` : ""}
    <section class="answer-section">
      <h3>Consensus view</h3>
      <p>${escapeHtml(answer.directAnswer)}</p>
    </section>
    <section class="answer-section route-block">
      <h3>${escapeHtml(answer.recommendedRoute.title)}</h3>
      <p>${escapeHtml(answer.recommendedRoute.summary)}</p>
    </section>
    <section class="answer-section">
      <h3>Suggested next questions</h3>
      <div class="chips">
        ${["How should we roll out coding agents across a team?", "When should we avoid agentic coding?", "How should agent workflows change in regulated systems?"].map((question) => `<button class="chip" data-question="${escapeHtml(question)}">${escapeHtml(question)}</button>`).join("")}
      </div>
    </section>
  `;
}

function AttributedExplainer(answer) {
  const explanation = answer.explanation;
  return `
    ${ExpertDiscussionCards(answer.citedFrom)}
    <section class="answer-section">
      <h3>Plain-language explanation</h3>
      <p>${escapeHtml(explanation.plainLanguage)}</p>
    </section>
    <section class="answer-section compact-grid">
      <div>
        <h3>Why it matters</h3>
        <p>${escapeHtml(explanation.whyItMatters)}</p>
      </div>
      <div>
        <h3>Common mistake</h3>
        <p>${escapeHtml(explanation.commonMistake)}</p>
      </div>
    </section>
    <section class="answer-section">
      <h3>Example</h3>
      <p>${escapeHtml(explanation.example)}</p>
    </section>
    <section class="answer-section">
      <h3>Related questions</h3>
      <div class="chips">
        ${(answer.relatedQuestions || []).map((question) => `<button class="chip" data-question="${escapeHtml(question)}">${escapeHtml(question)}</button>`).join("")}
      </div>
    </section>
  `;
}

function ExpertDiscussionCards(sources) {
  return `
    <section class="answer-section">
      <h3>Expert discussion</h3>
      <div class="discussion-grid">
        ${sources.map((source) => `
          <article class="discussion-card">
            ${ExpertPortrait(source)}
            <div>
              <strong>${escapeHtml(source.name.split(" ")[0])}</strong>
              <p>${escapeHtml(source.relevantClaim)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function NoAnswerState(answer) {
  return `
    <section class="answer-section">
      <h3 class="no-answer-heading">${escapeHtml(answer.noAnswer.heading)}</h3>
      <p>${escapeHtml(answer.noAnswer.explanation)}</p>
    </section>
    ${CurationRequestForm(answer)}
    <section class="answer-section">
      <h3>Ask a related question</h3>
      <div class="chips">
        ${suggestedQuestions
          .filter((question) => !question.toLowerCase().includes("safety-critical"))
          .slice(0, 4)
          .map((question) => `<button class="chip" data-question="${escapeHtml(question)}">${escapeHtml(question)}</button>`)
          .join("")}
      </div>
    </section>
  `;
}

function ExpertApproachCard(approach, index, selectable = true) {
  const isSelected = state.selectedApproach === index;
  const leaders = ["Anjanava's view", "Armin's view", "Ben's view"];
  return `
    <article class="approach-card ${isSelected && selectable ? "is-selected" : ""}">
      <h4>${escapeHtml(approach.title)}</h4>
      <div class="mini-meta">Led by ${escapeHtml(leaders[index] || "expert view")}</div>
      <div>
        <div class="label">Position</div>
        <p>${escapeHtml(approach.summary)}</p>
      </div>
      <div>
        <div class="label">Best when</div>
        <ul class="plain-list">${approach.bestFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div>
        <div class="label">Trade-off</div>
        <p>${escapeHtml(approach.mainRisk)}</p>
      </div>
      ${selectable ? `<button class="choice-button" data-approach="${index}">${escapeHtml(approach.ctaLabel)}</button>` : ""}
    </article>
  `;
}

function ExpertOptionCard(option, index) {
  const labels = ["Option A", "Option B", "Option C"];
  return `
    <article class="approach-card">
      <h4>${escapeHtml(labels[index] || "Option")}: ${escapeHtml(option.title)}</h4>
      <div>
        <div class="label">Expert-backed argument</div>
        <p>${escapeHtml(option.summary)}</p>
      </div>
      <div>
        <div class="label">Best when</div>
        <ul class="plain-list">${option.bestFor.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      <div>
        <div class="label">Trade-off</div>
        <p>${escapeHtml(option.mainRisk)}</p>
      </div>
    </article>
  `;
}

function TradeoffTable(table) {
  if (!table) return "";
  return `
    <table class="tradeoff">
      <thead>
        <tr>${table.columns.map((column) => `<th>${escapeHtml(column)}</th>`).join("")}</tr>
      </thead>
      <tbody>
        ${table.rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

function SelectedPathExpansion(approach) {
  if (!approach?.selectedOutput) return "";
  const output = approach.selectedOutput;
  return `
    <div class="selected-expansion">
      <div>
        <div class="label">Selected route</div>
        <h4>${escapeHtml(approach.title)}</h4>
      </div>
      <div>
        <h4>Why this route fits</h4>
        <p>${escapeHtml(output.whyThisFits)}</p>
      </div>
      <div>
        <h4>Rollout checklist</h4>
        <ul class="plain-list">${output.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>
      ${output.policySnippet ? `<div><h4>Team policy snippet</h4><div class="policy-snippet">${escapeHtml(output.policySnippet)}</div></div>` : ""}
      <div>
        <h4>Agent-ready prompt</h4>
        <div class="agent-prompt">${escapeHtml(output.agentPrompt)}</div>
      </div>
    </div>
  `;
}

function CollapsedSourceDetail(sources) {
  return `
    <section class="source-details">
      <details>
        <summary>View source details</summary>
      <div class="source-grid" style="margin-top: 12px;">
        ${sources.map(SourceDetailCard).join("")}
      </div>
      </details>
    </section>
  `;
}

function SourceDetailCard(source) {
  return `
    <article class="source-card">
      <div class="source-topline">
        <span class="source-initials">${escapeHtml(source.initials)}</span>
        <div>
          <h4>${escapeHtml(source.name)}</h4>
          <div class="mini-meta">${escapeHtml([source.role, source.company].filter(Boolean).join(" · "))}</div>
        </div>
      </div>
      <div class="mini-meta">${escapeHtml(source.sourceType)} · ${escapeHtml(source.date || "Corpus source")}</div>
      <p><strong>${escapeHtml(source.sourceTitle)}</strong></p>
      <div class="label">Used for</div>
      <p>${escapeHtml(source.relevantClaim)}</p>
    </article>
  `;
}

function CitedFromPanel(sources) {
  return CollapsedSourceDetail(sources);
}

function SourceAttributionCard(source) {
  return SourceDetailCard(source);
}

function AgentPromptCard(prompt) {
  return `
    <section class="answer-section">
      <h3>Agent-ready prompt</h3>
      <div class="agent-prompt">${escapeHtml(prompt)}</div>
    </section>
  `;
}

function FollowUpActions(answer) {
  return `
    <section class="answer-section">
      <h3>Follow-up actions</h3>
      <div class="chips">
        ${answer.followUpActions
          .map((action) => `<button class="chip ${state.followUp === action ? "is-active" : ""}" data-follow-up="${escapeHtml(action)}">${escapeHtml(action)}</button>`)
          .join("")}
      </div>
    </section>
  `;
}

function MockFollowUp(answer, followUp) {
  const lower = followUp.toLowerCase();
  let body = "Ground Truth would keep the same expert context and expand the practical next step without repeating the source detail.";

  if (lower.includes("safest")) {
    body = "Safest route: keep tasks small, require plan review, cap file count, reject unexplained dependencies, and assign a human owner before merge.";
  } else if (lower.includes("balanced")) {
    body = "Balanced route: allow scoped multi-file changes after plan review, with explicit ownership, dependency checks, and a small enough pull request for meaningful human review.";
  } else if (lower.includes("fastest")) {
    body = "Fastest route: permit broader agent execution only where CI, tests, ownership gates, rollback paths, and architecture review are already mature.";
  } else if (lower.includes("policy")) {
    body = "Team policy: agent-generated work must expose scope, assumptions, affected files, dependency risks, and test meaning before a human reviewer approves merge.";
  } else if (lower.includes("prompt")) {
    body = answer.agentPrompt || "Ask the agent to declare scope, risk, assumptions, and context gaps before it edits code.";
  } else if (lower.includes("disagree")) {
    body = "Experts mainly disagree on how quickly teams should increase autonomy. The split is between productivity-first adoption and review-maturity-first adoption.";
  } else if (lower.includes("curation")) {
    body = "This follow-up would create a demand signal for Packt editors to commission deeper practitioner coverage.";
  } else if (lower.includes("checklist")) {
    body = "Checklist: scope, plan, affected files, architecture fit, dependency change, test meaning, security impact, owner, rollback path.";
  }

  return `
    <section class="answer-section mock-follow-up">
      <h3>${escapeHtml(followUp)}</h3>
      <p>${escapeHtml(body)}</p>
    </section>
  `;
}

function FeedbackPanel() {
  const useful = ["Yes", "Partly", "No"];
  const trust = ["Yes", "Not sure", "No"];
  const value = ["Expert attribution", "Trade-offs", "Multiple approaches", "Source visibility", "Practical checklist", "Agent-ready prompt", "Other"];
  const membership = ["Yes, for myself", "Yes, for my team", "Maybe", "No"];
  return `
    <section class="feedback-panel">
      <h3>Feedback</h3>
      <div class="feedback-grid">
        ${FeedbackGroup("Was this useful?", "useful", useful)}
        ${FeedbackGroup("Did attribution make this more trustworthy?", "trust", trust)}
        ${FeedbackGroup("What made it useful?", "value", value)}
        ${FeedbackGroup("Would you want this in Agentic Engineering membership?", "membership", membership)}
      </div>
      <div class="feedback-group" style="margin-top: 12px;">
        <label class="label" for="coverage">What should Ground Truth cover next?</label>
        <textarea id="coverage" data-feedback-text placeholder="Add a curation request or missing source area...">${escapeHtml(state.feedback.coverage || "")}</textarea>
      </div>
    </section>
  `;
}

function FeedbackGroup(label, key, options) {
  return `
    <div class="feedback-group">
      <div class="label">${escapeHtml(label)}</div>
      <div class="feedback-options">
        ${options
          .map((option) => `<button data-feedback-key="${escapeHtml(key)}" data-feedback-value="${escapeHtml(option)}" class="${state.feedback[key] === option ? "is-active" : ""}">${escapeHtml(option)}</button>`)
          .join("")}
      </div>
    </div>
  `;
}

function CurationRequestForm(answer) {
  return `
    <form class="curation-form" data-action="curation">
      <h3>Submit this to the curation queue</h3>
      <label>
        <span class="label">What question are you trying to answer?</span>
        <textarea name="question">${escapeHtml(answer.question)}</textarea>
      </label>
      <div class="field-grid">
        <label>
          <span class="label">What decision are you trying to make?</span>
          <input name="decision" placeholder="e.g. approve agent use in a regulated codebase" />
        </label>
        <label>
          <span class="label">What kind of expert would you trust?</span>
          <input name="expert" placeholder="e.g. embedded safety engineer, fintech CTO" />
        </label>
      </div>
      <div class="field-grid">
        <label>
          <span class="label">How urgent is this?</span>
          <select name="urgency">
            <option>This month</option>
            <option>This quarter</option>
            <option>Exploratory</option>
          </select>
        </label>
        <label>
          <span class="label">Notify when coverage is added?</span>
          <select name="notify">
            <option>Yes</option>
            <option>No</option>
          </select>
        </label>
      </div>
      <button class="submit-button" type="submit">${state.curationSubmitted ? "Request submitted" : "Submit request"}</button>
    </form>
  `;
}

function askQuestion(question) {
  const cleanQuestion = question.replace(/^>\s*/, "").trim();
  if (!cleanQuestion) return;
  state.query = cleanQuestion;
  state.answer = routeQuestion(cleanQuestion);
  state.selectedApproach = null;
  state.followUp = "";
  state.curationSubmitted = false;
  render();
}

function handleClick(event) {
  const authButton = event.target.closest("[data-auth-mode]");
  if (authButton) {
    state.authMode = authButton.dataset.authMode;
    if (state.authMode === "logged-out") {
      state.answer = null;
      state.query = "";
      state.selectedApproach = null;
      state.followUp = "";
    }
    if (state.authMode === "experts") {
      state.expertStep = 1;
    }
    render();
    return;
  }

  const expertMetricButton = event.target.closest("[data-expert-metric]");
  if (expertMetricButton) {
    state.expertMetric = expertMetricButton.dataset.expertMetric;
    render();
    return;
  }

  const expertTypeButton = event.target.closest("[data-expert-type]");
  if (expertTypeButton) {
    state.expertWizardType = expertTypeButton.dataset.expertType;
    const type = selectedWizardType();
    state.expertHandoff = type.recommendedHandoff;
    render();
    return;
  }

  const expertHandoffButton = event.target.closest("[data-expert-handoff]");
  if (expertHandoffButton) {
    const handoffId = expertHandoffButton.dataset.expertHandoff;
    const allowed = allowedHandoffOptions().map((option) => option.id);
    if (allowed.includes(handoffId)) {
      state.expertHandoff = handoffId;
    }
    render();
    return;
  }

  const expertUsageButton = event.target.closest("[data-expert-usage]");
  if (expertUsageButton) {
    const usageId = expertUsageButton.dataset.expertUsage;
    state.expertUsage[usageId] = !state.expertUsage[usageId];
    render();
    return;
  }

  const expertNextStepButton = event.target.closest("[data-expert-next-step]");
  if (expertNextStepButton) {
    state.expertNextStep = expertNextStepButton.dataset.expertNextStep;
    render();
    return;
  }

  const expertStepButton = event.target.closest("[data-expert-step]");
  if (expertStepButton) {
    state.expertStep = Number(expertStepButton.dataset.expertStep);
    render();
    return;
  }

  const expertNextButton = event.target.closest("[data-expert-next]");
  if (expertNextButton) {
    state.expertStep = Math.min(state.expertStep + 1, 4);
    render();
    return;
  }

  const expertBackButton = event.target.closest("[data-expert-back]");
  if (expertBackButton) {
    state.expertStep = Math.max(state.expertStep - 1, 1);
    render();
    return;
  }

  const expertResetButton = event.target.closest("[data-expert-reset]");
  if (expertResetButton) {
    state.expertStep = 1;
    render();
    return;
  }

  const questionButton = event.target.closest("[data-question]");
  if (questionButton) {
    if (state.authMode === "logged-out") {
      state.authMode = "logged-in";
    }
    askQuestion(questionButton.dataset.question);
    return;
  }

  const approachButton = event.target.closest("[data-approach]");
  if (approachButton) {
    state.selectedApproach = Number(approachButton.dataset.approach);
    state.followUp = "";
    render();
    return;
  }

  const followUpButton = event.target.closest("[data-follow-up]");
  if (followUpButton) {
    state.followUp = followUpButton.dataset.followUp;
    const followUp = state.followUp.toLowerCase();
    if (state.answer?.layout === "expert-decision-answer" && followUp.includes("safest")) {
      state.selectedApproach = 0;
    }
    if (state.answer?.layout === "expert-decision-answer" && followUp.includes("balanced")) {
      state.selectedApproach = 1;
    }
    if (state.answer?.layout === "expert-decision-answer" && followUp.includes("fastest")) {
      state.selectedApproach = 2;
    }
    render();
    return;
  }

  const feedbackButton = event.target.closest("[data-feedback-key]");
  if (feedbackButton) {
    state.feedback[feedbackButton.dataset.feedbackKey] = feedbackButton.dataset.feedbackValue;
    render();
  }
}

function handleSubmit(event) {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();

  if (form.dataset.action === "ask") {
    askQuestion(new FormData(form).get("query"));
  }

  if (form.dataset.action === "curation") {
    state.curationSubmitted = true;
    render();
  }

}

function handleInput(event) {
  if (event.target.matches("input[name='query']")) {
    state.query = event.target.value;
  }

  if (event.target.matches("[data-expert-link]")) {
    state.expertLink = event.target.value;
  }

  if (event.target.matches("[data-expert-profile]")) {
    state.expertProfile[event.target.dataset.expertProfile] = event.target.value;
  }

  if (event.target.matches("[data-feedback-text]")) {
    state.feedback.coverage = event.target.value;
  }
}

function handleChange(event) {
  if (event.target.matches("[data-expert-file]")) {
    state.expertUploadedFile = event.target.files?.[0]?.name || "";
    render();
  }
}

function handleDragOver(event) {
  if (event.target.closest("[data-file-drop-zone]")) {
    event.preventDefault();
  }
}

function handleDrop(event) {
  const dropZone = event.target.closest("[data-file-drop-zone]");
  if (!dropZone) return;
  event.preventDefault();
  state.expertUploadedFile = event.dataTransfer?.files?.[0]?.name || "File ready for review";
  render();
}

function render() {
  document.querySelector("#root").innerHTML = GroundTruthApp();
}

document.addEventListener("click", handleClick);
document.addEventListener("submit", handleSubmit);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleChange);
document.addEventListener("dragover", handleDragOver);
document.addEventListener("drop", handleDrop);
render();
