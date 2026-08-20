import type { Profile } from '../types';

export const zh: Profile = {
  lang: 'zh',
  altPath: '/en',
  altLabel: 'EN',

  meta: {
    title: '燕庭轩 · 具身智能体的可验证任务执行',
    description:
      '燕庭轩，西北工业大学人工智能工学硕士。研究具身智能体的可验证任务执行、大模型任务规划、可验证奖励强化学习与多模态遥感理解。',
    htmlLang: 'zh-CN',
  },

  hero: {
    name: '燕庭轩',
    latinName: 'TINGXUAN YAN',
    affiliation: '西北工业大学 · 人工智能 · 工学硕士',
    period: '2025.09 — 2028.03',
    statement: ['让智能体的每一步', '都可验证'],
    tagline:
      '把大模型的决策交给程序校验：语义层只签目标与约束，几何层负责展开与复现，违规折算成结构化反馈驱动重规划。',
    keywords: ['大模型任务规划', '可验证强化学习', '多模态感知', '遥感理解'],
    email: 'mua-plus@qq.com',
    github: 'https://github.com/Mriris',
    githubLabel: 'GitHub',
  },

  scene: {
    t1: 'T1 · 2021',
    t2: 'T2 · 2025',
    legend: '检出变化',
    caption: '双时相影像判读：拖动分界线比对前后时相，品红为模型检出的变化区。',
    alt: '双时相遥感影像对比示意图，右侧叠加品红色的变化检测掩膜',
  },

  stats: [
    { value: 2, label: '期刊论文', note: '含 1 篇在审' },
    { value: 1, label: '发明专利', note: '已受理' },
    { value: 4, label: '主研项目', note: '2 项已落地' },
    { value: 3, label: '国家级奖项', note: '一等奖 2 项' },
  ],

  research: {
    title: '研究方向',
    latin: 'RESEARCH',
    nav: '研究',
    areas: [
      {
        id: 'verifiable-execution',
        title: '可验证任务执行',
        summary:
          '语义与几何分工的闭环规划：大模型只表达目标与约束的语义契约，由确定性程序展开为可执行方案，校验把违规折算成结构化反馈驱动重规划。',
        points: ['免训练闭环规划', '结构化反馈重规划', '仿真与实机一致'],
      },
      {
        id: 'verifiable-rl',
        title: '可验证奖励强化学习',
        summary:
          '用可验证奖励直接训练多轮工具调用策略：自建环境工厂产出训练数据，以工具调用率与类型熵作为策略坍缩的早期指标。',
        points: ['环境工厂', '奖励体系重构', '策略坍缩诊断'],
      },
      {
        id: 'multimodal-rs',
        title: '多模态遥感理解',
        summary:
          '异源变化检测与在线知识蒸馏：教师与学生解码器分处同源与异源影像对，训练中在线蒸馏缓解跨模态特征差异；再以智能体编排专业视觉工具。',
        points: ['光学-SAR 异源配对', '在线知识蒸馏', '工具编排智能体'],
      },
    ],
  },

  publications: {
    title: '学术成果',
    latin: 'PUBLICATIONS',
    nav: '成果',
    items: [
      {
        id: 'tmm-gold',
        venue: 'IEEE Transactions on Multimedia',
        venueNote: '中科院一区 · CCF-B',
        status: '审稿中 · 第二轮修改',
        title: 'GOLD：面向异源遥感变化检测的在线知识蒸馏框架',
        role: '学生第一作者',
        meta: '',
        live: true,
      },
      {
        id: 'jrs-semantic',
        venue: '遥感学报',
        venueNote: 'EI · 中文核心',
        status: '已发表',
        title: '面向遥感语义变化检测的时空变化协同感知方法',
        role: '学生第一作者',
        meta: 'DOI: 10.11834/jrs.20265265',
        live: false,
      },
      {
        id: 'patent-rotated',
        venue: '国家发明专利',
        venueNote: '国家知识产权局',
        status: '已受理',
        title: '基于旋转物体检测的载体目标交会参数测量方法',
        role: '学生第一发明人',
        meta: '',
        live: false,
      },
    ],
  },

  projects: {
    title: '项目精选',
    latin: 'PROJECTS',
    nav: '项目',
    items: [
      {
        id: 'uav-embodied',
        name: '无人机具身智能 · 免训练任务规划',
        tagline: '大模型只签语义契约，航线由确定性程序展开',
        metrics: ['180 次评测成功率 95.0%', '不可飞任务 6/6 正确拒绝', '平均 1.34 轮 · 17.8 秒'],
        body: '提出语义与几何分工的闭环规划范式：大模型表达巡检目标与成像要求，确定性程序展开为航线，校验将违规折算为结构化反馈驱动重规划。Isaac Sim 城市场景仿真、PX4 SITL 直连、cuVSLAM 定位 ATE 0.33 m，145 项回归测试覆盖全链路。',
        stack: ['Isaac Sim', 'PX4 SITL', 'cuVSLAM', 'Python'],
        href: '',
        hrefLabel: '',
      },
      {
        id: 'veriRS',
        name: 'VeriRS · 多模态大模型的可验证强化学习',
        tagline: '可验证奖励直接驱动多轮工具调用的策略优化',
        metrics: ['4,554 环境 / 38,926 任务', '有效轨迹率 99.99%', '消除 29% 任务的无梯度信号'],
        body: '以多模态大模型为基座，用可验证奖励做 GRPO 训练多轮工具调用，自建环境工厂产出训练数据。重构奖励体系消除「模板复读也获正奖励」等无梯度场景；以工具调用率与类型熵监控策略坍缩，定位并修复 rollout 未注入工具 schema 导致的静默假坍缩。',
        stack: ['GRPO', 'RLVR', 'verl', '多模态大模型'],
        href: '',
        hrefLabel: '',
      },
      {
        id: 'gold',
        name: 'GOLD · 异源光学-SAR 变化检测',
        tagline: '在线蒸馏跨越模态差异，并开源首个双时序配对基准',
        metrics: ['数据集已开源', 'IEEE TMM 在审', '优秀本科毕业论文'],
        body: '共享光学编码器承载双时相影像，教师解码器处理同源对、学生解码器处理异源光学-SAR 对，训练中在线蒸馏缓解跨模态特征差异。自研影像切片流水线与 LabelmeCD-AI 标注工具；构建首个同时含光学-光学与光学-SAR 时序配对的变化检测基准，已发布于 HuggingFace 与 ModelScope。',
        stack: ['PyTorch', '知识蒸馏', 'SAR', '数据集构建'],
        href: 'https://github.com/Mriris/GOLD',
        hrefLabel: '查看仓库',
      },
      {
        id: 'views',
        name: 'VIEWS 纬视 · 遥感情报侦查多模态智能体',
        tagline: '为无视觉能力的大模型赋能视觉，为无工具能力的大模型编排任务',
        metrics: ['完全离线部署', '文心大赛决赛优胜奖', '已落地部署'],
        body: '基于 LangGraph 的 ReAct 智能体，编排分割、变化检测、目标检测、配准等专业工具，以 Graph RAG 复用历史任务经验。无需微调即让通用大模型获得遥感分析能力；数据不出服务机，可在边缘设备运行。',
        stack: ['LangGraph', 'Graph RAG', 'FastAPI', 'Docker'],
        href: '',
        hrefLabel: '',
      },
    ],
  },

  skills: {
    title: '技能与背景',
    latin: 'SKILLS & AWARDS',
    nav: '背景',
    groups: [
      { id: 'lang', label: '语言', items: ['Python', 'C / C++', 'C# / .NET'] },
      {
        id: 'framework',
        label: '框架',
        items: ['PyTorch', 'Transformers', 'LangGraph', 'FastAPI', 'Docker'],
      },
      {
        id: 'domain',
        label: '方向',
        items: ['多模态大模型与智能体', '强化学习 GRPO / RLVR', '模式识别与视觉理解'],
      },
    ],
    awardsLabel: '竞赛荣誉',
    awards: [
      '百度 Apollo 城市道路自动驾驶大赛 · 全国一等奖',
      '第 26 届中国机器人及人工智能大赛 · 全国一等奖',
      '全球校园人工智能算法精英大赛 · 全国二等奖',
    ],
    educationLabel: '教育背景',
    education: [
      {
        id: 'npu',
        school: '西北工业大学',
        degree: '人工智能 · 工学硕士',
        period: '2025.09 — 2028.03',
        notes: ['预计毕业'],
      },
      {
        id: 'dlmu',
        school: '大连海事大学',
        degree: '软件工程 · 工学学士',
        period: '2021.09 — 2025.06',
        notes: ['市优秀毕业生', '优秀本科毕业论文'],
      },
    ],
  },

  archive: {
    label: '延伸',
    title: '大作业存档站',
    description: '八项课程大作业的聚合存档：归档年月、课程来源、技术栈与成绩一览，整卡直达仓库。',
    href: 'https://mriris.github.io/coursework-archive/',
    cta: '前往存档站',
  },

  footer: {
    emailLabel: '邮箱',
    githubLabel: 'GitHub',
    note: '',
    copyright: '燕庭轩',
  },

  a11y: {
    themeToggle: '切换明暗主题',
    langToggle: '切换到英文',
  },
};
