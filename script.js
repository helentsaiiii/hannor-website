(function () {
  "use strict";

  const i18n = {
    en: {
      "nav.spirit": "About",
      "nav.services": "Services",
      "nav.setup": "Set up",
      "setup.label": "One-Stop Admin Support",
      "setup.title": "SET UP collaboration flow",
      "setup.tagline": "From your first Taiwan office to the first local paycheck…",
      "setup.s0.phase": "Intake",
      "setup.s0.title": "Intake call",
      "setup.s0.body": "Clarify goals, entity options, headcount timing and constraints — then a Taiwan landing scope one-pager.",
      "setup.s1.phase": "Blueprint",
      "setup.s1.title": "Diagnostic workshop",
      "setup.s1.body": "A structured session that produces a landing blueprint and a clear RACI across client, Hannor and local partners.",
      "setup.s2.phase": "Registration",
      "setup.s2.title": "Registration sprint",
      "setup.s2.body": "Name check → document pack → filing → approval and tax ID — coordinated with your counsel where required.",
      "setup.s3.phase": "Compliance",
      "setup.s3.title": "Policies & compliance base",
      "setup.s3.body": "Core policies and regulatory housekeeping ready before the first joiners arrive.",
      "setup.s4.phase": "Payroll",
      "setup.s4.title": "Payroll go-live / EOR bridge",
      "setup.s4.body": "Local payroll or EOR bridge timed with hiring onboarding so day-one pay is covered.",
      "setup.s5.phase": "Handoff",
      "setup.s5.title": "Stabilize & handoff",
      "setup.s5.body": "Steady-state support through 1–3 payroll cycles, then a clean handoff — with a re-start window if you need us again.",
      "setup.pair.title": "How SET UP pairs with Map / Hire / Pay",
      "setup.pair.a": "<strong>Map</strong> — talent landscape and headcount plan inform which entity path and admin load you need.",
      "setup.pair.b": "<strong>Hire</strong> — registration and policies stay ahead of offer dates so candidates can start on schedule.",
      "setup.pair.c": "<strong>Pay</strong> — EOR or local payroll plugs in when the entity is ready, or bridges until it is.",
      "setup.disclaimer": "Scope and timelines depend on your case and local requirements; formal filings and legal opinions are handled with qualified counsel as needed — this overview is not a legal guarantee.",
      "nav.process": "How we work",
      "nav.domains": "Domains",
      "nav.clients": "Clients",
      "clients.label": "Track record",
      "clients.title": "Results that speak for us",
      "clients.lead": "Selected outcomes across Taiwan’s semiconductor and hi-tech hiring.",
      "track.s1": "Countries our clients come from",
      "track.s2": "Multinationals, startups and local companies served",
      "track.s3": "Placements, from engineers to C-level",
      "track.s4": "Taiwan Top 50 tech",
      "track.eng": "Selected engagements",
      "track.e1.who": "Israeli IC design house",
      "track.e1.what": "Their first TPM in Taiwan",
      "track.e1.when": "2 months",
      "track.e2.who": "Dutch semiconductor equipment maker",
      "track.e2.what": "Built the Application/Service team",
      "track.e2.when": "3–6 months",
      "track.e3.who": "Japanese IC design house",
      "track.e3.what": "Built the SCM, Sales and R&D teams",
      "track.e3.when": "3 teams",
      "track.e4.who": "UK semiconductor equipment maker",
      "track.e4.what": "Application/Service hires",
      "track.e4.when": "3 months",
      "track.note": "“Taiwan Top 50 tech” highlights our focus on Taiwan’s leading technology groups; selected named references appear in our company introduction.",
      "nav.team": "Team",
      "nav.contact": "Contact",
      "hero.eyebrow": "Company Introduction · 2026",
      "hero.tagline": "Inspired by the ocean, dedicated to talent.",
      "hero.lead": "Talent search for Taiwan’s semiconductor & hi-tech industry",
      "hero.cta": "Start a discovery call",
      "hero.cta2": "Explore services",
      "spirit.label": "The spirit behind our name",
      "spirit.quote": "“The ocean remains vast because it welcomes every river.”",
      "spirit.body": "Just as the ocean gathers diverse streams, Hannor brings top-tier talent into the right corporate currents, driving growth for both the people and the companies we serve.",
      "services.label": "Our services",
      "services.title": "Two ways we partner with you in Taiwan",
      "services.lead": "Talent search and one-stop landing support — equal focus, one team.",
      "services.s1.pillar": "HIRE",
      "services.s1.title": "Talent search",
      "services.s1.tag": "Semiconductor & hi-tech recruiting",
      "services.s1.a": "Market mapping and talent search",
      "services.s1.b": "Screening, interviews, and offer close",
      "services.s1.c": "Semiconductor and hi-tech focus",
      "services.s1.d": "From engineers to leadership roles",
      "services.s2.pillar": "ONE-STOP",
      "services.s2.title": "Land & operate in Taiwan",
      "services.s2.tag": "EOR · entity · payroll & admin",
      "services.s2.a": "Employer of Record — hire and pay before your entity is ready",
      "services.s2.b": "Taiwan entity — registration, tax, banking, capital verification",
      "services.s2.c": "Payroll, labor & health insurance, bookkeeping and tax filing",
      "services.s2.d": "One package, one point of contact after go-live",
      "services.note": "Need people before the entity is ready? Start with EOR → hire → move staff to your own entity.",
      "process.label": "How we work",
      "process.title": "From first brief to first day",
      "process.t1.time": "1 session",
      "process.t1.title": "Discovery call",
      "process.t1.body": "We align on the role, team, must-haves and salary range.",
      "process.t2.time": "7–14 days",
      "process.t2.title": "Shortlist delivered",
      "process.t2.body": "Screened candidate CVs, each with consultant notes.",
      "process.t3.time": "2–3 weeks",
      "process.t3.title": "Interviews",
      "process.t3.body": "We schedule, prepare both sides and gather feedback.",
      "process.t4.time": "Close",
      "process.t4.title": "Offer",
      "process.t4.body": "We guide the offer and negotiation to a yes.",
      "process.t5.time": "Day 1",
      "process.t5.title": "Onboarding",
      "process.t5.body": "We stay in touch through the guarantee period.",
      "domains.label": "Domain",
      "domains.title": "Where we specialize",
      "domains.industry": "Industry",
      "domains.function": "Function",
      "team.label": "Our people",
      "team.title": "Meet the founder",
      "team.helen.role": "Founder & Managing Consultant",
      "team.helen.bio": "Helen works as a talent advisor, helping global tech companies land and grow in Taiwan, from their first local hire to full engineering and sales teams.",
      "team.helen.quote": "“I treat every client with sincerity, as a true partner, building wins for the company, the candidate and the long-term relationship.”",
      "team.helen.t1": "7+ years in executive search",
      "team.helen.t2": "Semiconductor & tech",
      "team.helen.t3": "Market advisory",
      "team.helen.t4": "Recruitment strategy",
      "team.core": "Core members",
      "team.c1.badge": "Leadership",
      "team.c1.title": "Head of Consulting",
      "team.c1.a": "Strategic talent partner for multinational hi-tech groups",
      "team.c1.b": "7+ years dedicated to hi-tech executive search",
      "team.c2.badge": "Semiconductor",
      "team.c2.title": "Senior Consulting Manager",
      "team.c2.a": "Built and scaled a specialized semiconductor business unit",
      "team.c2.b": "Led 5 consultants in high-end R&D and engineering search",
      "team.c3.badge": "Software",
      "team.c3.title": "Senior Consulting Manager",
      "team.c3.a": "7+ years dedicated to software talent",
      "team.c3.b": "Previously led 15+ consultants delivering high-standard search",
      "team.c4.badge": "Technical advisory",
      "team.c4.title": "Professional Consultant",
      "team.c4.a": "7 years of hands-on experience as an R&D engineer",
      "team.c4.b": "Technical insight and advisory for engineering roles",
      "contactus.title": "Contact",
      "contactus.lead": "Tell me a bit about your situation and I’ll get back to you within one business day.",
      "contactus.first": "First Name",
      "contactus.last": "Last Name",
      "contactus.email": "Email",
      "contactus.company": "Company",
      "contactus.need": "What do you need?",
      "contactus.message": "Message",
      "contactus.send": "Send message",
      "contact.thanks": "Get in touch",
      "contact.label": "Get in touch",
      "contact.role": "Founder & Managing Consultant",
      "contact.mail": "Mail",
      "contact.phone": "Phone",
      "contact.cta": "Email Hannor",
      "footer.rights": "All rights reserved.",
      "footer.top": "Back to top"
    },
    zh: {
      "nav.spirit": "關於我們",
      "nav.services": "服務項目",
      "nav.setup": "行政落地",
      "setup.label": "一站式行政支援",
      "setup.title": "SET UP 合作流程",
      "setup.tagline": "從第一間台灣辦公室，到第一份在地薪資……",
      "setup.s0.phase": "需求對齊",
      "setup.s0.title": "Intake 諮詢",
      "setup.s0.body": "釐清目標、設立路徑、人力時程與限制條件，並產出台灣落地範圍一頁摘要。",
      "setup.s1.phase": "藍圖",
      "setup.s1.title": "診斷工作坊",
      "setup.s1.body": "透過結構化討論產出落地藍圖，並明確客戶、Hannor 與在地夥伴的 RACI 分工。",
      "setup.s2.phase": "設立登記",
      "setup.s2.title": "登記衝刺",
      "setup.s2.body": "名稱預查 → 文件準備 → 送件 → 核准與稅籍編號；必要時與您的法律顧問協同。",
      "setup.s3.phase": "合規",
      "setup.s3.title": "政策與合規基礎",
      "setup.s3.body": "在首位同仁到職前，備妥核心政策與基本法規行政事項。",
      "setup.s4.phase": "薪資上線",
      "setup.s4.title": "薪資上線／EOR 銜接",
      "setup.s4.body": "本地薪資或 EOR 銜接與招募到職時程對齊，讓到職日即有薪資安排。",
      "setup.s5.phase": "移交",
      "setup.s5.title": "穩定運行與移交",
      "setup.s5.body": "協助穩定 1–3 個薪資週期後正式移交；若日後再需要，可重新啟動支援。",
      "setup.pair.title": "SET UP 如何與 Map／Hire／Pay 搭配",
      "setup.pair.a": "<strong>Map</strong> — 人才地圖與人力規劃，協助判斷需要哪種設立路徑與行政負荷。",
      "setup.pair.b": "<strong>Hire</strong> — 登記與政策超前於錄取時程，讓候選人能如期到職。",
      "setup.pair.c": "<strong>Pay</strong> — 實體就緒即可接本地薪資；尚未就緒時可先以 EOR 銜接。",
      "setup.disclaimer": "實際範圍與時程依個案與當地規定而定；正式送件與法律意見必要時由合格顧問處理——本說明不構成法律保證。",
      "nav.process": "合作流程",
      "nav.domains": "專業領域",
      "nav.clients": "客戶實績",
      "clients.label": "客戶實績",
      "clients.title": "實績說話",
      "clients.lead": "精選台灣半導體與高科技招募成果。",
      "track.s1": "客戶來自的國家數",
      "track.s2": "服務過的跨國企業、新創與在地公司",
      "track.s3": "成功媒合，從工程師到高階主管",
      "track.s4": "台灣50大科技業",
      "track.eng": "精選合作案例",
      "track.e1.who": "以色列 IC 設計公司",
      "track.e1.what": "其首位台灣 TPM",
      "track.e1.when": "2 個月",
      "track.e2.who": "荷蘭半導體設備商",
      "track.e2.what": "建立 Application/Service 團隊",
      "track.e2.when": "3–6 個月",
      "track.e3.who": "日本 IC 設計公司",
      "track.e3.what": "建立 SCM、業務與研發團隊",
      "track.e3.when": "3 個團隊",
      "track.e4.who": "英國半導體設備商",
      "track.e4.what": "Application/Service 招募",
      "track.e4.when": "3 個月",
      "track.note": "「台灣50大科技業」標示我們聚焦台灣領先科技企業客戶群；公司簡介中另有具名案例可供參考。",
      "nav.team": "團隊",
      "nav.contact": "聯絡我們",
      "hero.eyebrow": "公司簡介 · 2026",
      "hero.tagline": "以海為志，以才為本。",
      "hero.lead": "專注台灣半導體與高科技產業的人才搜尋",
      "hero.cta": "預約探索諮詢",
      "hero.cta2": "了解服務",
      "spirit.label": "名稱背後的精神",
      "spirit.quote": "「海納百川，有容乃大。」",
      "spirit.body": "正如大海匯聚百川，Hannor 將頂尖人才導入適合的企業潮流，為人才與企業共同創造成長。",
      "services.label": "我們的服務",
      "services.title": "兩大同等重要的合作方式",
      "services.lead": "人才搜尋與一站式落地支援，同等重視、同一團隊。",
      "services.s1.pillar": "HIRE",
      "services.s1.title": "人才搜尋／獵才",
      "services.s1.tag": "半導體與高科技招募",
      "services.s1.a": "市場盤點與人才搜尋",
      "services.s1.b": "篩選、面試與談定 offer",
      "services.s1.c": "聚焦半導體與高科技",
      "services.s1.d": "從工程師到高階主管",
      "services.s2.pillar": "ONE-STOP",
      "services.s2.title": "台灣落地與營運一站式",
      "services.s2.tag": "EOR · 公司設立 · 薪資與行政",
      "services.s2.a": "EOR：公司尚未設立前即可在台雇用與發薪",
      "services.s2.b": "台灣公司設立：登記、稅務、銀行、驗資",
      "services.s2.c": "月薪、勞健保、記帳與報稅",
      "services.s2.d": "一站打包、上線後單一窗口",
      "services.note": "還沒有公司主體也要先用人？先走 EOR → 獵才 → 再轉入自有實體。",
      "process.label": "合作流程",
      "process.title": "從第一場簡報到到職日",
      "process.t1.time": "1 場",
      "process.t1.title": "探索諮詢",
      "process.t1.body": "對齊職缺、團隊、必要條件與薪資範圍。",
      "process.t2.time": "7–14 天",
      "process.t2.title": "候選人名單",
      "process.t2.body": "經篩選的履歷，每份附顧問註記。",
      "process.t3.time": "2–3 週",
      "process.t3.title": "面試",
      "process.t3.body": "安排時程、雙方準備，並彙整回饋。",
      "process.t4.time": "結案",
      "process.t4.title": "錄取",
      "process.t4.body": "引導錄取條件談判至雙方同意。",
      "process.t5.time": "到職日",
      "process.t5.title": "到職輔導",
      "process.t5.body": "保證期間持續跟進。",
      "domains.label": "專業領域",
      "domains.title": "我們的專長",
      "domains.industry": "產業",
      "domains.function": "職能",
      "team.label": "我們的團隊",
      "team.title": "認識創辦人",
      "team.helen.role": "創辦人暨管理顧問",
      "team.helen.bio": "Helen 擔任人才顧問，協助全球科技公司在台灣落地成長——從首位在地招募到完整工程與業務團隊。",
      "team.helen.quote": "「我以誠待每一位客戶，視彼此為真正的夥伴，為企業、候選人與長期關係共創雙贏。」",
      "team.helen.t1": "7+ 年高階獵才經驗",
      "team.helen.t2": "半導體與科技",
      "team.helen.t3": "市場顧問",
      "team.helen.t4": "招募策略",
      "team.core": "核心成員",
      "team.c1.badge": "領導",
      "team.c1.title": "顧問總監 Head of Consulting",
      "team.c1.a": "跨國高科技集團策略人才夥伴",
      "team.c1.b": "7+ 年專注高科技高階獵才",
      "team.c2.badge": "半導體",
      "team.c2.title": "資深顧問經理",
      "team.c2.a": "建立並擴大規模化半導體事業單元",
      "team.c2.b": "帶領 5 位顧問專精高階研發與工程獵才",
      "team.c3.badge": "軟體",
      "team.c3.title": "資深顧問經理",
      "team.c3.a": "7+ 年專注軟體人才",
      "team.c3.b": "曾帶領 15+ 位顧問交付高標準搜尋",
      "team.c4.badge": "技術顧問",
      "team.c4.title": "專業顧問",
      "team.c4.a": "7 年研發工程師實務經驗",
      "team.c4.b": "為工程職缺提供技術洞察與顧問",
      "contactus.title": "聯絡我們",
      "contactus.lead": "簡單告訴我你的情況，我會在一個工作天內回覆你。",
      "contactus.first": "名字",
      "contactus.last": "姓氏",
      "contactus.email": "Email",
      "contactus.company": "公司",
      "contactus.need": "你需要什麼？",
      "contactus.message": "訊息",
      "contactus.send": "送出訊息",
      "contact.thanks": "聯絡我們",
      "contact.label": "聯絡我們",
      "contact.role": "創辦人暨管理顧問",
      "contact.mail": "郵件",
      "contact.phone": "電話",
      "contact.cta": "寄信給 Hannor",
      "footer.rights": "版權所有。",
      "footer.top": "回到頂端"
    }
  };

  function applyLang(lang) {
    const dict = i18n[lang] || i18n.en;
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
    try { localStorage.setItem("hannor-lang", lang); } catch (e) { /* ignore */ }
    if (formStatus && formStatus.getAttribute("data-state")) {
      formStatus.textContent = formStatusText(formStatus.getAttribute("data-state"), lang);
    }
  }

  // Language toggle
  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  // Default: English for international clients; Traditional Chinese if browser is zh*
  var startLang = "en";
  try {
    var navLang = (navigator.languages && navigator.languages[0]) || navigator.language || "";
    if (String(navLang).toLowerCase().indexOf("zh") === 0) startLang = "zh";
  } catch (e) { /* ignore */ }
  applyLang(startLang);

  // Sticky header shadow
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form posts via Web3Forms → helen.tsai@hannortw.com (stays on the page; no mailto)
  var form = document.getElementById("contact-form");
  var formStatus = document.getElementById("contact-form-status");

  function formStatusText(state, lang) {
    var zh = lang === "zh";
    if (state === "sending") return zh ? "送出中…" : "Sending…";
    if (state === "success") {
      return zh
        ? "已收到，謝謝。我會在一個工作天內回覆你。"
        : "Thanks — your message is on its way. I’ll reply within one business day.";
    }
    if (state === "error") {
      return zh
        ? "送出時發生問題，請改寄信到 helen.tsai@hannortw.com。"
        : "Something went wrong. Please email helen.tsai@hannortw.com.";
    }
    return "";
  }

  function showFormStatus(state) {
    if (!formStatus) return;
    formStatus.setAttribute("data-state", state);
    var lang = document.documentElement.lang.indexOf("zh") === 0 ? "zh" : "en";
    formStatus.textContent = formStatusText(state, lang);
    formStatus.hidden = !state;
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('[type="submit"]');
      if (btn) {
        btn.disabled = true;
        btn.setAttribute("aria-busy", "true");
      }
      showFormStatus("sending");

      var data = new FormData(form);
      var payload = {};
      data.forEach(function (value, key) {
        payload[key] = typeof value === "string" ? value : "";
      });
      if (!payload.botcheck) delete payload.botcheck;
      var who = [payload.first_name, payload.last_name].map(function (part) {
        return (part || "").trim();
      }).filter(Boolean).join(" ");
      payload.from_name = who || "Hannor website";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          return response.json().then(function (body) {
            return { ok: response.status === 200, body: body };
          });
        })
        .then(function (result) {
          if (!result.ok || !result.body || result.body.success !== true) {
            throw new Error("submit failed");
          }
          form.reset();
          showFormStatus("success");
        })
        .catch(function () {
          showFormStatus("error");
        })
        .then(function () {
          if (btn) {
            btn.disabled = false;
            btn.removeAttribute("aria-busy");
          }
        });
    });
  }

})();
