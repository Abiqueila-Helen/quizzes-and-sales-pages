import { o as __toESM } from "./_runtime.mjs";
import { n as require_react } from "./_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { t as Route } from "./_slug-5euZHj5S.mjs";
import { A as ArrowLeft, D as Calendar, E as Check, S as ClipboardList, T as ChevronDown, a as Target, c as RefreshCw, j as Sparkles, n as X, s as ShieldCheck, v as Feather, w as ChevronLeft, x as Clock3 } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BH4ummnj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useQuiz(config) {
	const [stage, setStage] = (0, import_react.useState)("hero");
	const [index, setIndex] = (0, import_react.useState)(0);
	const [answers, setAnswers] = (0, import_react.useState)({});
	const total = config.questions.length;
	const currentQuestion = stage === "questions" ? config.questions[index] ?? null : null;
	const weights = (0, import_react.useMemo)(() => {
		const acc = {};
		for (const q of config.questions) {
			const chosenId = answers[q.id];
			if (!chosenId) continue;
			const opt = q.options.find((o) => o.id === chosenId);
			if (!opt?.weights) continue;
			for (const [k, v] of Object.entries(opt.weights)) acc[k] = (acc[k] ?? 0) + v;
		}
		return acc;
	}, [answers, config.questions]);
	const diagnosis = (0, import_react.useMemo)(() => {
		if (stage !== "result") return null;
		let bestKey = null;
		let bestVal = -Infinity;
		for (const [k, v] of Object.entries(weights)) if (v > bestVal) {
			bestVal = v;
			bestKey = k;
		}
		const key = bestKey ?? config.defaultDiagnosis ?? config.diagnoses[0]?.key;
		return config.diagnoses.find((d) => d.key === key) ?? config.diagnoses[0] ?? null;
	}, [
		stage,
		weights,
		config
	]);
	const start = (0, import_react.useCallback)(() => {
		setStage("questions");
		setIndex(0);
	}, []);
	const answer = (0, import_react.useCallback)((option) => {
		const q = config.questions[index];
		if (!q) return;
		setAnswers((prev) => ({
			...prev,
			[q.id]: option.id
		}));
		if (index + 1 < total) setIndex((i) => i + 1);
		else setStage("processing");
	}, [
		config.questions,
		index,
		total
	]);
	const finishProcessing = (0, import_react.useCallback)(() => setStage("percentages"), []);
	const showResult = (0, import_react.useCallback)(() => setStage("result"), []);
	return {
		stage,
		index,
		total,
		answers,
		currentQuestion,
		start,
		answer,
		back: (0, import_react.useCallback)(() => {
			if (stage !== "questions") return;
			if (index === 0) {
				setStage("hero");
				return;
			}
			setIndex((i) => Math.max(0, i - 1));
		}, [stage, index]),
		finishProcessing,
		showResult,
		reset: (0, import_react.useCallback)(() => {
			setStage("hero");
			setIndex(0);
			setAnswers({});
		}, []),
		diagnosis,
		weights
	};
}
function QuizTopbar({ brand, cta }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-quiz max-w-6xl flex items-center justify-between py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-lg sm:text-xl font-semibold text-foreground",
				children: brand
			}), cta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs sm:text-sm text-muted-foreground",
				children: cta
			})]
		})
	});
}
function Hero({ hero, onStart }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-quiz max-w-3xl py-16 sm:py-24 text-center animate-fade-up",
		children: [
			hero.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-block rounded-full bg-gold px-5 py-2 text-xs sm:text-sm font-semibold tracking-wider text-gold-foreground",
				children: hero.badge
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 font-serif text-3xl sm:text-5xl font-semibold leading-[1.15] text-foreground",
				children: hero.headline
			}),
			hero.subheadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto",
				children: hero.subheadline
			}),
			hero.footnote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" }), hero.footnote]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onStart,
					className: "inline-flex items-center justify-center rounded-md bg-gold px-10 py-4 text-sm sm:text-base font-semibold tracking-wider text-gold-foreground shadow-sm transition-all hover:brightness-95 active:scale-[0.98]",
					children: hero.button.toUpperCase()
				})
			})
		]
	});
}
function ProgressBar({ current, total }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2 w-full rounded-full bg-muted overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full rounded-full bg-gold transition-all duration-500 ease-out",
				style: { width: `${Math.min(100, Math.max(0, current / total * 100))}%` }
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-center text-sm text-muted-foreground",
			children: [
				"Pergunta ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold font-medium",
					children: current
				}),
				" de ",
				total
			]
		})]
	});
}
function Question({ question, index, total, onAnswer, onBack, canGoBack }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-quiz py-8 sm:py-12 animate-fade-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
				current: index + 1,
				total
			}),
			canGoBack && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				onClick: onBack,
				className: "mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-4 w-4" }), " Voltar"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 sm:mt-10 text-center",
				children: [
					question.subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm uppercase tracking-wider text-muted-foreground mb-3",
						children: question.subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-2xl sm:text-3xl font-semibold leading-snug text-foreground",
						children: question.title
					}),
					question.image && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: question.image,
						alt: "",
						className: "mt-6 rounded-xl mx-auto max-h-72 object-cover"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 sm:mt-10 flex flex-col gap-3",
				children: question.options.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => onAnswer(opt),
					className: "w-full text-left rounded-xl border border-border bg-card px-5 py-4 sm:py-5 text-foreground shadow-sm transition-all hover:border-gold hover:shadow-md active:scale-[0.995] focus:outline-none focus:ring-2 focus:ring-gold",
					children: opt.label
				}) }, opt.id))
			})
		]
	}, question.id);
}
function Processing({ title = "Analisando suas respostas...", steps, onComplete }) {
	const [doneCount, setDoneCount] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		let acc = 0;
		const timers = [];
		steps.forEach((s, i) => {
			acc += s.duration ?? 1400;
			timers.push(setTimeout(() => {
				if (!cancelled) setDoneCount(i + 1);
			}, acc));
		});
		timers.push(setTimeout(() => {
			if (!cancelled) onComplete();
		}, acc + 500));
		return () => {
			cancelled = true;
			timers.forEach(clearTimeout);
		};
	}, [steps, onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-quiz py-20 sm:py-32 animate-fade-up",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-2xl sm:text-3xl font-semibold text-foreground",
				children: title
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-10 mx-auto max-w-md flex flex-col gap-4",
			children: steps.map((s, i) => {
				const done = i < doneCount;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: `flex items-center gap-3 text-base transition-opacity duration-300 ${done || i === doneCount ? "opacity-100" : "opacity-40"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${done ? "bg-gold border-gold text-gold-foreground" : "border-muted-foreground/40 text-muted-foreground"}`,
						children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-3.5 w-3.5",
							strokeWidth: 3
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: "•"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: done ? "text-foreground" : "text-muted-foreground",
						children: s.label
					})]
				}, i);
			})
		})]
	});
}
function Result({ diagnosis, offer, brand }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "animate-fade-up",
		children: [
			diagnosis && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-quiz max-w-2xl py-12 sm:py-16 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full bg-gold px-5 py-2 text-xs font-semibold tracking-wider text-gold-foreground",
						children: "SEU DIAGNÓSTICO"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-6 font-serif text-3xl sm:text-4xl font-semibold text-foreground",
						children: diagnosis.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed",
						children: diagnosis.summary
					}),
					diagnosis.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground leading-relaxed",
						children: diagnosis.description
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionDark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-quiz max-w-2xl text-center py-12 sm:py-20",
				children: [
					offer.hero.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold tracking-wider text-gold-foreground",
						children: offer.hero.badge
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-serif text-3xl sm:text-5xl font-semibold text-cream",
						children: offer.hero.headline
					}),
					offer.hero.subheadline && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-cream/80 text-base sm:text-lg",
						children: offer.hero.subheadline
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.problem.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: offer.problem.text
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.solution.title,
				tone: "muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground leading-relaxed",
					children: offer.solution.text
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.beforeAfter.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid sm:grid-cols-2 gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-xl mb-4",
							children: "Antes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: offer.beforeAfter.before.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5 text-destructive shrink-0" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })
								]
							}, i))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-gold/40 bg-card p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-xl mb-4",
							children: "Depois"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2",
							children: offer.beforeAfter.after.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2 text-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-gold shrink-0" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })
								]
							}, i))
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.benefits.title,
				tone: "muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid sm:grid-cols-2 gap-3",
					children: offer.benefits.items.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2 items-start rounded-xl bg-card p-4 border border-border",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-gold shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: b
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.howItWorks.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-3 gap-4",
					children: offer.howItWorks.steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-serif text-2xl text-gold",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground text-sm leading-relaxed",
							children: s.text
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.testimonials.title,
				tone: "muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-3 gap-4",
					children: offer.testimonials.items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "rounded-2xl bg-card border border-border p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-foreground italic",
							children: [
								"\"",
								t.text,
								"\""
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-3 text-sm text-muted-foreground",
							children: [
								"— ",
								t.name,
								t.role ? `, ${t.role}` : ""
							]
						})]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.author.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 max-w-2xl mx-auto text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-serif text-2xl text-foreground",
						children: offer.author.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: offer.author.bio
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionDark, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-quiz max-w-md text-center py-16",
				children: [
					offer.pricing.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold tracking-wider text-gold-foreground",
						children: offer.pricing.badge
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-serif text-3xl text-cream",
						children: offer.pricing.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 rounded-2xl bg-cream/5 border border-cream/10 p-6",
						children: [
							offer.pricing.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-cream/60 line-through",
								children: offer.pricing.oldPrice
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-5xl text-gold mt-1",
								children: offer.pricing.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 text-left space-y-2",
								children: offer.pricing.bullets.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2 text-cream/90",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-5 w-5 text-gold shrink-0" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b })
									]
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: offer.pricing.ctaUrl,
								className: "mt-6 block w-full rounded-md bg-gold py-4 text-center font-semibold tracking-wider text-gold-foreground hover:brightness-95 active:scale-[0.98] transition",
								children: offer.pricing.cta.toUpperCase()
							})
						]
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.guarantee.title,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl mx-auto text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-12 w-12 text-gold mx-auto" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: offer.guarantee.text
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				title: offer.faq.title,
				tone: "muted",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-2xl mx-auto flex flex-col gap-2",
					children: offer.faq.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQItem, {
						q: item.q,
						a: item.a
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "container-quiz max-w-xl text-center py-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl sm:text-3xl text-foreground",
					children: offer.finalCta.headline
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: offer.finalCta.url,
					className: "mt-8 inline-block rounded-md bg-gold px-10 py-4 font-semibold tracking-wider text-gold-foreground hover:brightness-95 active:scale-[0.98] transition",
					children: offer.finalCta.button.toUpperCase()
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border py-8 text-center text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-base text-foreground",
					children: offer.footer.brand || brand
				}), offer.footer.text && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: offer.footer.text
				})]
			})
		]
	});
}
function Section({ title, children, tone = "default" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: tone === "muted" ? "bg-muted/40" : "",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-quiz max-w-4xl py-14 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-serif text-2xl sm:text-3xl text-foreground text-center mb-8",
				children: title
			}), children]
		})
	});
}
function SectionDark({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		style: { background: "oklch(0.22 0.04 60)" },
		children
	});
}
function FAQItem({ q, a }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-card overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setOpen((o) => !o),
			className: "w-full flex items-center justify-between gap-3 px-5 py-4 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-foreground",
				children: q
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: `h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}` })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pb-4 text-muted-foreground",
			children: a
		})]
	});
}
var BASE_URL = "https://imersao.cristinacamargo.com.br";
function PercentagesScreen({ weights, diagnoses, onComplete }) {
	const maxWeight = Math.max(...Object.values(weights), 1);
	const items = diagnoses.map((d) => {
		const raw = weights[d.key] ?? 0;
		const pct = Math.round(raw / maxWeight * 80) + 10;
		return {
			key: d.key,
			title: d.title,
			pct
		};
	});
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(onComplete, 5e3);
		return () => clearTimeout(timer);
	}, [onComplete]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "min-h-screen bg-marfim flex flex-col items-center justify-center px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl sm:text-3xl font-semibold text-marrom mb-8 text-center",
				children: "Seu padrão emocional predominante"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-md space-y-4",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-white/80 p-4 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-body text-sm text-muted mb-2",
							children: item.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-3 w-full rounded-full bg-border overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full",
								style: {
									width: `${item.pct}%`,
									background: "linear-gradient(to right, #A0632A, #D4A257)"
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 font-body text-right text-xs text-muted",
							children: [item.pct, "%"]
						})
					]
				}, item.key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onComplete,
				className: "mt-10 rounded-full bg-gold px-8 py-3 font-semibold text-marrom shadow-[0_4px_24px_rgba(212,162,87,0.35)] hover:-translate-y-0.5 transition-transform",
				children: "Ver meu resultado completo"
			})
		]
	});
}
function DiagnosticoGratuitoFlow({ config, quiz }) {
	if (quiz.stage === "hero") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "min-h-screen bg-marfim pb-20 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-shimmer::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 1.6s ease-in-out infinite;
          }
          @keyframes btnShimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(400%) skewX(-12deg); }
          }
          .opt-btn-shimmer {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: translateX(-100%) skewX(-12deg);
            pointer-events: none;
          }
          .opt-btn:hover .opt-btn-shimmer {
            animation: btnShimmer 0.65s ease forwards;
          }
        ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pt-10 sm:pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl mx-auto relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block uppercase text-xs tracking-[0.2em] text-ambar font-body font-medium mb-4",
							children: config.hero.badge ?? "Diagnóstico gratuito"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display font-semibold text-4xl sm:text-5xl text-marrom leading-tight mb-4",
							children: config.hero.headline
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full mb-8 overflow-hidden",
						style: {
							aspectRatio: "4/3",
							borderRadius: 16,
							border: "2px solid #D4A257"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: `${BASE_URL}/quiz/q1.jpeg`,
							alt: "",
							className: "w-full h-full object-cover object-top block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 left-0 right-0 flex items-center justify-center px-5 py-3",
							style: {
								backgroundColor: "#D4A257",
								zIndex: 6
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-body font-medium text-[15px] text-white text-center tracking-wide",
								children: config.hero.subheadline ?? "Um diagnóstico que vai mudar sua vida."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock3, { className: "h-4 w-4" }), config.hero.footnote ?? "Leva menos de 2 minutos."]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: quiz.start,
							className: "relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 text-base font-semibold tracking-wide text-marrom shadow-[0_4px_24px_rgba(212,162,87,0.35)] transition-all hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transition-transform duration-700 group-hover:translate-x-[100%]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: config.hero.button })]
						})]
					})
				]
			})
		})]
	});
	if (quiz.stage === "questions" && quiz.currentQuestion) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "min-h-screen bg-marfim pb-20 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(400%); }
          }
          .progress-shimmer::after {
            content: '';
            position: absolute;
            inset: 0;
            width: 25%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
            animation: shimmer 1.6s ease-in-out infinite;
          }
          @keyframes btnShimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(400%) skewX(-12deg); }
          }
          .opt-btn-shimmer {
            position: absolute;
            inset: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent);
            transform: translateX(-100%) skewX(-12deg);
            pointer-events: none;
          }
          .opt-btn:hover .opt-btn-shimmer {
            animation: btnShimmer 0.65s ease forwards;
          }
        ` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "px-5 pt-10 sm:pt-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xl mx-auto relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block uppercase text-xs tracking-[0.2em] text-ambar font-body font-medium mb-4",
							children: "Diagnóstico gratuito"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display font-semibold text-4xl sm:text-5xl text-marrom leading-tight mb-4",
							children: "Descubra qual padrão está conduzindo sua vida"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-full mb-8 overflow-hidden",
						style: {
							aspectRatio: "4/3",
							borderRadius: 16,
							border: "2px solid #D4A257"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: quiz.currentQuestion.image ?? `${BASE_URL}/quiz/q1.jpeg`,
							alt: "",
							className: "w-full h-full object-cover object-top block"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 left-0 right-0 flex items-center justify-center px-5 py-3",
							style: {
								backgroundColor: "#D4A257",
								zIndex: 6
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-body font-medium text-[15px] text-white text-center tracking-wide",
								children: "Um diagnóstico que vai mudar sua vida."
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-body font-light text-sm text-muted",
								children: [
									"Pergunta ",
									quiz.index + 1,
									" de ",
									quiz.total
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-body font-light text-sm text-muted",
								children: [Math.round((quiz.index + 1) / quiz.total * 100), "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 w-full rounded-full bg-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "progress-shimmer relative h-2 overflow-hidden rounded-full",
								style: {
									width: `${Math.round((quiz.index + 1) / quiz.total * 100)}%`,
									background: "linear-gradient(to right, #A0632A, #D4A257)"
								}
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: { animation: "fadeInUp 0.4s ease forwards" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-8 font-display font-semibold text-3xl leading-snug text-marrom sm:text-4xl",
							children: quiz.currentQuestion.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-10 space-y-3",
							children: quiz.currentQuestion.options.map((option, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "opt-btn relative w-full overflow-hidden rounded-xl border px-5 py-4 text-left transition-all",
								style: {
									backgroundColor: "#FAF5EE",
									borderColor: "#E2CEAD",
									borderWidth: 1.5,
									borderStyle: "solid"
								},
								onClick: () => quiz.answer(option),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "opt-btn-shimmer" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-start gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-medium font-body",
										style: {
											backgroundColor: [
												"#E2CEAD",
												"#D4A257",
												"#A0632A",
												"#5C3A1E"
											][index % 4],
											color: index === 2 || index === 3 ? "#ffffff" : "#1A0E06"
										},
										children: String.fromCharCode(65 + index)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-body text-[20px] leading-relaxed",
										style: { color: "#5C3A1E" },
										children: option.label
									})]
								})]
							}, option.id))
						})]
					})
				]
			})
		})]
	});
	if (quiz.stage === "processing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Processing, {
		title: config.processing.title ?? "Analisando suas respostas...",
		steps: config.processing.steps,
		onComplete: quiz.finishProcessing
	});
	if (quiz.stage === "percentages") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PercentagesScreen, {
		weights: quiz.weights,
		diagnoses: config.diagnoses,
		onComplete: quiz.showResult
	});
	if (quiz.stage === "result") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
			diagnosis: quiz.diagnosis,
			offer: config.offer,
			brand: config.brand
		})
	});
	return null;
}
var hero_default = "/assets/hero-Dcf32M4q.jpg";
var mockup_default = "/assets/mockup-DtadlHOq.jpg";
var antes_depois_default = "/assets/antes-depois-CM32NS16.jpg";
var para_quem_default = "/assets/para-quem-BEbbknBt.jpg";
var CTA_URL = "#comprar";
var TOTAL_STEPS = 14;
var BG = "#141110";
var CARD = "#1c1816";
var BORDER = "#3a2a20";
var GOLD = "#c9a45c";
var GOLD_SOFT = "#d4b678";
var COPPER = "#c07a5f";
var COPPER_DARK = "#8a4f3e";
var GREEN = "#a8c98a";
var GREEN_DARK = "#5d7a3d";
var TEXT = "#efe6d8";
var TEXT_MUTED = "#a89a86";
function Shell({ step, onBack, children }) {
	const pct = step / TOTAL_STEPS * 100;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen w-full",
		style: {
			backgroundColor: BG,
			color: TEXT
		},
		children: [
			onBack && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onBack,
				className: "fixed left-4 top-4 z-10 rounded-full p-2 transition hover:bg-white/5",
				style: { color: TEXT_MUTED },
				"aria-label": "Voltar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pt-6 px-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-xl h-1.5 rounded-full overflow-hidden",
					style: { backgroundColor: "#2a211d" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full transition-all duration-500 ease-out",
						style: {
							width: `${pct}%`,
							backgroundColor: COPPER
						}
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-5 pt-10 pb-32 mx-auto max-w-xl animate-[fadeUp_.4s_ease-out_both]",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}` })
		]
	});
}
function GreenCTA({ children, onClick, href }) {
	const cls = "fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(560px,calc(100%-2.5rem))] rounded-full px-8 py-4 text-center text-sm sm:text-base font-semibold tracking-wide transition-all hover:brightness-95 active:scale-[0.98] shadow-[0_10px_30px_rgba(168,201,138,0.25)]";
	const style = {
		backgroundColor: GREEN,
		color: "#1c2812",
		border: `2px solid ${GREEN_DARK}`
	};
	return href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		style,
		children
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cls,
		style,
		children
	});
}
function CopperCTA({ children, onClick, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled,
		className: "fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(560px,calc(100%-2.5rem))] rounded-full px-8 py-4 text-center text-sm sm:text-base font-semibold tracking-wide transition-all hover:brightness-95 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed",
		style: {
			backgroundColor: COPPER_DARK,
			color: "#f6e4d6",
			border: `2px solid ${COPPER}`
		},
		children
	});
}
function Step1Hero({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "text-center font-serif text-[26px] sm:text-3xl font-semibold leading-tight",
			style: { color: GOLD },
			children: [
				"Você sabe o que precisa fazer.",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
					className: "not-italic italic",
					style: { fontStyle: "italic" },
					children: "O problema é que você não faz."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-5 text-center text-[15px] leading-relaxed",
			style: { color: TEXT },
			children: [
				"Em apenas 10 dias você vai aprender a parar de",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD,
						fontWeight: 600
					},
					children: "procrastinar"
				}),
				" e",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD,
						fontWeight: 600
					},
					children: "hackear sua mente para"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "finalmente fazer o que precisa ser feito:" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-center italic font-semibold",
			style: { color: GOLD_SOFT },
			children: [
				"+6770 mulheres já mudaram sua rotina com esse",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"protocolo de 10 passos simples."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden rounded-2xl border",
			style: { borderColor: BORDER },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Mulher na escrivaninha à noite",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "EU QUERO PARAR DE PROCRASTINAR!"
		})
	] });
}
var DORES = [
	"Procrastino demais meus hábitos e projetos",
	"Não consigo terminar o que começo, zero constância...",
	"Sinto que tenho pouco tempo livre, não sei me organizar direito",
	"Me sinto desmotivada e quero mudar de vida",
	"Parece que o tempo passa e nada na minha vida muda. Preciso começar a agir."
];
function Step2Dores({ next, back, selected, setSelected }) {
	const toggle = (i) => setSelected(selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-center font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Antes de mais nada, eu preciso me certificar",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"que você ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "tem o perfil necessário" }),
				" para o",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"Protocolo Do Zero À Rotina Produtiva."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-center italic font-semibold",
			style: { color: COPPER },
			children: "Para garantir que você tenha resultados reais!"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-6 text-center text-sm",
			style: { color: TEXT },
			children: [
				"Quais são suas maiores dores com sua rotina hoje em dia?",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Selecione os campos abaixo:" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: DORES.map((label, i) => {
				const isSelected = selected.includes(i);
				const letter = String.fromCharCode(65 + i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(i),
					className: "w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all",
					style: {
						backgroundColor: isSelected ? "#2a1f18" : CARD,
						borderColor: isSelected ? GOLD : BORDER
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-semibold",
						style: {
							backgroundColor: isSelected ? GOLD : "#2a211d",
							color: isSelected ? "#1c1310" : GOLD_SOFT
						},
						children: letter
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm leading-snug",
						style: { color: GOLD_SOFT },
						children: label
					})]
				}, i);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopperCTA, {
			onClick: next,
			disabled: selected.length === 0,
			children: "ESTOU PRONTA PARA TER UMA ROTINA PRODUTIVA!"
		})
	] });
}
var DESEJOS = [
	"Me sentir orgulhosa de mim mesma ao final do dia",
	"Ter tempo e energia para cumprir com meus hábitos e metas",
	"Provar para mim mesma que sou capaz de ser constante",
	"Parar de procrastinar e adiar a vida que eu sei que mereço viver",
	"Nada, até porque já aceitei que sou uma procrastinadora e não farei nada para mudar"
];
function Step3Desejos({ next, back, selected, setSelected }) {
	const toggle = (i) => setSelected(selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-center font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"E agora, seja SINCERA: o que você deseja e não",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"quer mais abrir mão na sua vida a partir de",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"agora?"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-center italic text-sm",
			style: { color: TEXT },
			children: "Selecione seus maiores desejos para sua rotina hoje em dia:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: DESEJOS.map((label, i) => {
				const isSelected = selected.includes(i);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggle(i),
					className: "w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all",
					style: {
						backgroundColor: isSelected ? "#2a1f18" : CARD,
						borderColor: isSelected ? GOLD : BORDER
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border",
						style: {
							borderColor: isSelected ? GOLD : "#4a3628",
							backgroundColor: isSelected ? GOLD : "transparent"
						},
						children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "h-4 w-4",
							style: { color: "#1c1310" },
							strokeWidth: 3
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm leading-snug",
						style: { color: GOLD_SOFT },
						children: label
					})]
				}, i);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopperCTA, {
			onClick: next,
			disabled: selected.length === 0,
			children: "EU ESTOU PRONTA PARA MUDAR!"
		})
	] });
}
var TESTIMONIALS = [
	{
		name: "Karine Perrotti",
		text: "Sensação de realização … consegui levantar as 5:30 e ter uma manhã super produtiva, uma tarde tranquila, e agora uma noite relaxante. Faz 2 meses que não praticava exercícios e voltei hoje, estou finalizando o dia com o coração bem grato 🙏",
		time: "21:33",
		caption: "Produtividade, tranquilidade e relaxamento!",
		initial: "K",
		color: "#8a5a3a"
	},
	{
		name: "Amanda Souza",
		text: "Eu não acreditava que 10 dias mudariam tanto. Hoje eu abro o dia com clareza do que fazer e fecho sem culpa. Nunca mais quero voltar pra antes.",
		time: "19:12",
		caption: "Clareza e leveza no dia a dia.",
		initial: "A",
		color: "#a0632a"
	},
	{
		name: "Juliana Reis",
		text: "Depois de anos me sabotando, entendi que o problema não era falta de disciplina — era falta de método. Esse protocolo destravou tudo.",
		time: "08:47",
		caption: "Método simples, resultado real.",
		initial: "J",
		color: "#6a4a3a"
	}
];
function Step4Testemunhos({ next, back }) {
	const [idx, setIdx] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "text-center font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Eu sei que parece difícil acreditar que",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"10 dias podem mudar sua vida."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-center italic text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				"Porque sim, saiba que se você executar esse desafio, você",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"VAI, em 10 dias, ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: { color: COPPER },
					children: ["finalmente ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "parar de procrastinar…" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-center text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Por isso, deixa eu te mostrar o que" }),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: GOLD },
					children: "mais de 6.700 mulheres"
				}),
				" ",
				"que já aplicaram esse protocolo estão dizendo:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 rounded-2xl border p-4",
			style: {
				backgroundColor: "#0d0b0a",
				borderColor: BORDER
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-xl p-4",
				style: { backgroundColor: "#1a1817" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white text-sm font-semibold",
						style: { backgroundColor: TESTIMONIALS[idx].color },
						children: TESTIMONIALS[idx].initial
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-semibold",
								style: { color: TEXT },
								children: ["~", TESTIMONIALS[idx].name]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed",
								style: { color: TEXT },
								children: TESTIMONIALS[idx].text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-right text-xs",
								style: { color: TEXT_MUTED },
								children: TESTIMONIALS[idx].time
							})
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-center text-sm",
				style: { color: TEXT },
				children: TESTIMONIALS[idx].caption
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex justify-center gap-2",
			children: TESTIMONIALS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setIdx(i),
				className: "h-2 w-2 rounded-full transition-all",
				style: {
					backgroundColor: i === idx ? COPPER : "#3a2a20",
					width: i === idx ? 20 : 8
				},
				"aria-label": `Depoimento ${i + 1}`
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "É ISSO QUE EU PRECISO!"
		})
	] });
}
function Step5Autora({ next, back }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-center text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Eu alcancei minha liberdade financeira e construí do ZERO minha carreira aos 22 anos." }),
				" ",
				"Hoje tenho mais de 1 milhão de seguidoras nas redes sociais falando sobre produtividade e neurociência e",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD,
						fontWeight: 600
					},
					children: "mais de 10.000 alunas transformadas."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 rounded-2xl border p-4",
			style: {
				backgroundColor: "#f8f6f1",
				borderColor: BORDER
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white text-sm font-semibold",
					style: { backgroundColor: "#c65832" },
					children: "L"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							style: { color: "#1a1310" },
							children: "~Lalá Martins 🌿 ✨"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed",
							style: { color: "#1a1310" },
							children: "Foi maravilhoso começar esse desafio vale muito mais do que ele foi cobrado! Já fiz muito desenvolvimento pessoal e imersões que não deram 1% do conteúdo apresentado aqui, e a Val é linda e meiga pra explicar sobre a mentalidade de auto sabotagem que precisamos saber, não poderia ter sido a melhor pílula de hoje pra começar e nos fazer sermos a nossa protagonista das nossas ações, termino meu dia feito e perfeito dando check em todos os hábitos, coisa que não tinha feito na vida ainda, esse desafio vale muito! Obrigada Val e equipe vcs são top! 🤎 ✨🍫🥧⏳"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-right text-xs",
							style: { color: "#7a6a5a" },
							children: "22:59"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm leading-relaxed",
			style: { color: TEXT },
			children: "Mas nada disso veio de talento, de sorte ou de uma manhã perfeita em que eu \"me encontrei\"."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-center text-sm",
			style: { color: TEXT },
			children: "Veio de 3 chaves inegociáveis"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
			className: "mt-4 space-y-2 text-sm max-w-xs mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: TEXT },
					children: "1. "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD_SOFT,
						fontWeight: 600
					},
					children: "Uma identidade poderosa."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: TEXT },
					children: "2. "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD_SOFT,
						fontWeight: 600
					},
					children: "Um propósito inegociável."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: TEXT },
					children: "3. "
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD_SOFT,
						fontWeight: 600
					},
					children: "Uma rotina anti-sabotagem"
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-lg p-3 text-center text-sm leading-relaxed",
			style: {
				backgroundColor: "#2a1f18",
				color: TEXT
			},
			children: [
				"Essas 3 chaves me deram o meu dia a dia dos sonhos: com foco, disciplina e constância...",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "e você poderá usar o mesmo plano que eu para construir a SUA vida dos sonhos a partir de HOJE." })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 rounded-lg p-3 text-center text-lg font-serif font-semibold leading-tight",
			style: {
				backgroundColor: "#3a2a1e",
				color: GOLD
			},
			children: "Você está pronta para começar a criar a ROTINA que sabe que nasceu para ter?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "ESTOU PRONTA!"
		})
	] });
}
function Step6Aviso({ next, back }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 uppercase text-xs tracking-[0.2em] font-semibold",
			style: { color: COPPER },
			children: "ANTES DE SEGUIR, LEIA COM ATENÇÃO"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-4 font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Em ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: GOLD_SOFT },
					children: "10 dias, e com apenas 5 minutos por dia"
				}),
				", esse Protocolo VAI eliminar a procrastinação da sua vida. ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					style: { color: GOLD_SOFT },
					children: ["Mas antes, ele vai te gerar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "desconforto:" })]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-5 text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				"Ele vai colocar em cheque ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "os padrões que fazem você se sabotar," }),
				" começar e parar, e se sentir culpada sem entender por quê."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 text-sm leading-relaxed font-semibold",
			style: { color: GOLD_SOFT },
			children: "Você vai deixar de aceitar a versão sua que fica parada: e isso vai ser desconfortável."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-5 text-sm font-semibold",
			style: { color: TEXT },
			children: "Esse desconforto é o preço da sua rotina dos sonhos."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-base font-semibold leading-snug",
			style: { color: TEXT },
			children: "E é importante que você esteja ciente dele antes de decidir entrar."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Estou ciente, e é exatamente o que eu preciso!"
		})
	] });
}
function Step7Tempo({ next, back, choice, setChoice }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mockup_default,
				alt: "Protocolo Rotina Produtiva",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 text-center text-sm font-semibold leading-relaxed",
			style: { color: TEXT },
			children: "E por último: para saber se você está preparada para iniciar sua jornada nesse Protocolo, eu preciso saber:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center text-base leading-snug",
			style: { color: GOLD },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [
				"Você tem liberdade de reservar ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: GOLD_SOFT },
					children: "5 minutos no seu dia"
				}),
				" para se dedicar à mudar sua vida?"
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-center italic text-sm",
			style: { color: COPPER },
			children: ["Não mais, nem menos, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "apenas 5 minutos no seu dia." })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-3",
			children: [{
				id: "sim",
				label: "Sim, 05 minutos eu tenho sim."
			}, {
				id: "nao",
				label: "Sem chance, não tenho tempo nem pra escovar os dentes."
			}].map((o) => {
				const isSel = choice === o.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setChoice(o.id),
					className: "w-full rounded-full border px-4 py-3 text-left flex items-center gap-3 transition-all",
					style: {
						backgroundColor: isSel ? "#2a1f18" : CARD,
						borderColor: isSel ? GOLD : BORDER
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border",
						style: {
							borderColor: isSel ? GOLD : "#4a3628",
							backgroundColor: isSel ? GOLD : "transparent"
						},
						children: isSel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-2 w-2 rounded-full",
							style: { backgroundColor: "#1c1310" }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						style: { color: GOLD_SOFT },
						children: o.label
					})]
				}, o.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CopperCTA, {
			onClick: next,
			disabled: !choice,
			children: "CONTINUAR"
		})
	] });
}
function Step8Protocolo({ next, back }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "uppercase text-xs tracking-[0.15em] font-semibold",
			style: { color: GOLD },
			children: "PERFEITO: SÃO 10 DIAS. 10 PASSOS. 5 MINUTOS POR DIA. RESULTADO IMEDIATO:"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mockup_default,
				alt: "Protocolo",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-6 font-serif text-lg font-semibold leading-snug",
			style: { color: TEXT },
			children: "O Protocolo do Zero à Rotina Produtiva é um desafio prático, leve e eficaz de 10 dias"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-sm leading-relaxed",
			style: { color: TEXT },
			children: ["Nos próximos 10 dias, você aplicará um plano infalível: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { color: GOLD },
				children: "um desafio de reprogramação de crenças e hábitos de 10 passos validados pela neurociência."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm italic font-semibold",
			style: { color: TEXT },
			children: "É simples: 1 aula por dia com técnica+ exercício prático + desafio estratégico."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 rounded-lg p-3 flex items-start gap-2 text-sm",
			style: {
				backgroundColor: "#2a3a20",
				color: "#d4e5b8"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
				className: "h-4 w-4 shrink-0 mt-0.5",
				style: { color: GREEN }
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Aplicação imediata. Para quem tem pouco tempo livre mas quer resultados REAIS e duradouros." }) })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 rounded-2xl p-5 border",
			style: {
				backgroundColor: "#2a2418",
				borderColor: BORDER
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-base mb-4",
				style: { color: TEXT },
				children: "Como funciona:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: [
					{
						icon: Calendar,
						text: "Duração de 10 dias"
					},
					{
						icon: Clock3,
						text: "1 passo prático por dia, que leva menos de 5 minutos"
					},
					{
						icon: Sparkles,
						text: "A cada etapa, você aplica o conteúdo na sua rotina e sente o resultado imediato"
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg p-3 flex items-start gap-3",
					style: { backgroundColor: "#3a3020" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
						className: "h-4 w-4 shrink-0 mt-0.5",
						style: { color: GOLD }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						style: { color: TEXT },
						children: it.text
					})]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-2xl p-5 border",
			style: {
				backgroundColor: "#2a3a20",
				borderColor: GREEN_DARK
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-base mb-4",
				style: { color: "#d4e5b8" },
				children: "Você vai aprender a:"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2",
				children: [
					{
						icon: ClipboardList,
						text: "Estruturar uma rotina funcional que se adapta à sua realidade"
					},
					{
						icon: RefreshCw,
						text: "Criar hábitos que não desmoronam nos dias difíceis"
					},
					{
						icon: Feather,
						text: "Eliminar o peso da cobrança e agir com leveza e constância"
					},
					{
						icon: Target,
						text: "Recuperar o foco e a motivação todos os dias"
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg p-3 flex items-start gap-3",
					style: { backgroundColor: "#3a4a2a" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
						className: "h-4 w-4 shrink-0 mt-0.5",
						style: { color: GREEN }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm",
						style: { color: "#e8f0d8" },
						children: it.text
					})]
				}, i))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Entendido!"
		})
	] });
}
function Step9Resultados({ next, back }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-6 font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: TEXT },
			children: [
				"Esses são os resultados que ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: GOLD },
					children: "as milhares de alunas do Desafio"
				}),
				" tem em suas rotinas ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "(e que você terá também):" })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: antes_depois_default,
				alt: "Antes e depois do protocolo",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "É isso que eu preciso!"
		})
	] });
}
function Step10ParaQuem({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-hidden rounded-2xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: para_quem_default,
				alt: "Para quem é o protocolo",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 uppercase text-xs tracking-[0.15em] font-semibold",
			style: { color: GOLD },
			children: "PARA QUEM É O PROTOCOLO DO ZERO À ROTINA PRODUTIVA?"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "mt-4 font-serif text-lg sm:text-xl font-semibold leading-snug",
			style: { color: TEXT },
			children: "Para a mulher que sabe que tem potencial: mas que a procrastinação e a falta de rotina estão impedindo ela de mostrar isso."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 italic text-sm",
			style: { color: GOLD },
			children: "Pra você, que quer..."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-3 space-y-2 text-sm list-disc pl-5",
			style: { color: TEXT },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Um ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "caminho claro para mudar de vida" }),
					": sem enrolação"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Parar de procrastinar" }), " e finalmente avançar na vida"] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Construir uma ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "rotina que funcione" }),
					", mesmo sem ter muito tempo livre"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Se ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sentir orgulhosa" }),
					" de quem você está sendo"
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Provar para si mesma que ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "você é capaz de ser constante" })] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Estou ciente, e é exatamente o que eu preciso!"
		})
	] });
}
var OFERTA_BULLETS = [
	{
		icon: "✅",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Curso completo com 10 passos" }), " práticos anti-procrastinação para mudança de vida"] })
	},
	{
		icon: "✅",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Desafio Anti-sabotagem" }), " validado pela neurociência"] })
	},
	{
		icon: "✅",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Exercícios comportamentais" }), " diários aplicáveis"] })
	},
	{
		icon: "🎁",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: { color: GOLD },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "BÔNUS:" })
		}), " Planner exclusivo de produtividade"] })
	},
	{
		icon: "🛡️",
		text: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Garantia incondicional de 7 dias" }) })
	}
];
function Step11Oferta({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-center uppercase text-xs sm:text-sm tracking-[0.15em] font-semibold leading-relaxed",
			style: { color: GOLD },
			children: [
				"TUDO O QUE VOCÊ RECEBE AO ENTRAR HOJE NO",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"PROTOCOLO DO ZERO À ROTINA PRODUTIVA:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mockup_default,
				alt: "Protocolo",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-8 space-y-4 text-center",
			children: [OFERTA_BULLETS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-[15px] leading-relaxed",
				style: { color: TEXT },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2",
					children: b.icon
				}), b.text]
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "italic text-sm pt-2",
				style: { color: TEXT_MUTED },
				children: "Resultados mensuráveis em apenas 10 dias"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Estou ciente, e é exatamente o que eu preciso!"
		})
	] });
}
function Step12Transformacao({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 mx-auto max-w-sm rounded-full border-2 px-6 py-3 flex items-center justify-center gap-2",
			style: {
				borderColor: COPPER,
				backgroundColor: "rgba(192,122,95,0.08)"
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				style: { color: COPPER },
				children: "⚠️"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-semibold",
				style: { color: COPPER },
				children: "Chegou a hora de mudar!"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 mx-auto rounded-2xl p-5",
			style: { backgroundColor: "#f2b5a3" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						style: { color: "#1a1310" },
						children: "~Eliane Braz"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold",
						style: { color: "#3d6a3d" },
						children: "+55 94 99157-3873"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[15px] leading-relaxed",
					style: { color: "#1a1310" },
					children: "A imersão foi incrível, o conteúdo transformador. Me vejo em casa relato da Val, como sempre com uma pílula para solucionar cada dificuldade que temos, às vezes me parece que alguém contou minha vida pra ela. Obrigada Val por tanta entrega. Gratidão por tudo. Que energia gostosa meninas, ambiente transformador."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-semibold",
						style: { backgroundColor: "#3d7a5d" },
						children: "E"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs",
						style: { color: "#3a2a20" },
						children: "21:59"
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-10 text-center font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Você está preparada para começar",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"sua jornada de transformação?"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Sim! Estou pronta!"
		})
	] });
}
function Step13Preco({ next }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-16 text-center font-serif text-xl sm:text-2xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Mais de 6.700 mulheres já aplicaram",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"esse protocolo."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-center italic font-semibold text-lg",
			style: { color: GOLD_SOFT },
			children: "Agora é a sua vez."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-center text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				"E para você que chegou até aqui eu me certifiquei de que",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: {
						color: GOLD,
						fontWeight: 600
					},
					children: "o preço não fosse de nenhuma forma um impeditivo"
				}),
				" para você começar hoje a transformar sua rotina:"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 mx-auto rounded-2xl border-2 p-5 text-center",
			style: {
				backgroundColor: "#6a2418",
				borderColor: "#8a3428"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: "#f2b5a3" },
					children: "⚠️"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-semibold text-sm leading-snug",
					style: { color: "#f6e4d6" },
					children: [
						"O investimento do Protocolo em breve",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"voltará para o preço original de",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { color: GOLD_SOFT },
							children: "R$297,00!"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			onClick: next,
			children: "Entendido!"
		})
	] });
}
function useCountdown(initialSeconds) {
	const [seconds, setSeconds] = (0, import_react.useState)(initialSeconds);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setSeconds((s) => s > 0 ? s - 1 : 0), 1e3);
		return () => clearInterval(t);
	}, []);
	const mm = Math.floor(seconds / 60);
	const ss = seconds % 60;
	return {
		mm: String(mm).padStart(2, "0"),
		ss: String(ss).padStart(2, "0")
	};
}
function Step14Checkout() {
	const { mm, ss } = useCountdown(900);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 flex items-center justify-center gap-3",
			children: [{
				v: mm,
				l: "min"
			}, {
				v: ss,
				l: "seg"
			}].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "h-16 w-16 rounded-full flex flex-col items-center justify-center",
					style: { backgroundColor: "#f2b5a3" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-semibold leading-none",
						style: { color: "#8a3428" },
						children: t.v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] leading-none mt-0.5",
						style: { color: "#8a3428" },
						children: t.l
					})]
				}), i === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xl font-semibold",
					style: { color: TEXT },
					children: ":"
				})]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
			className: "mt-6 text-center font-serif text-lg sm:text-xl font-semibold leading-snug",
			style: { color: GOLD },
			children: [
				"Chegou a hora de você tomar a",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"decisão MAIS IMPORTANTE para",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"mudar sua vida HOJE!"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-center italic text-sm leading-relaxed",
			style: { color: TEXT },
			children: [
				"Apenas hoje, por tempo limitado, você tem a oportunidade de acessar o desafio Protocolo DZRP com",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					style: { color: COPPER },
					children: "+R$200,00 de desconto:"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-8 text-center text-lg",
			style: { color: TEXT },
			children: [
				"De ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "line-through",
					style: { color: TEXT_MUTED },
					children: "R$ 297,00"
				}),
				" por apenas"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex items-baseline justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-2xl font-semibold",
				style: { color: TEXT },
				children: "12X"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-5xl sm:text-6xl font-bold",
				style: { color: GREEN },
				children: "R$4,90"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-center italic text-sm",
			style: { color: TEXT },
			children: "Ou R$47,00 à vista"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mockup_default,
				alt: "Protocolo",
				className: "w-full h-auto block",
				width: 1024,
				height: 1024,
				loading: "lazy"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-6 space-y-3 text-center",
			children: [OFERTA_BULLETS.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "text-sm leading-relaxed",
				style: { color: TEXT },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mr-2",
					children: b.icon
				}), b.text]
			}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "italic text-xs pt-1",
				style: { color: TEXT_MUTED },
				children: "Resultados mensuráveis em apenas 10 dias"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenCTA, {
			href: CTA_URL,
			children: "DESTRAVAR MINHA VAGA AGORA"
		})
	] });
}
function PararDeProcrastinarFlow() {
	const [step, setStep] = (0, import_react.useState)(1);
	const [dores, setDores] = (0, import_react.useState)([]);
	const [desejos, setDesejos] = (0, import_react.useState)([]);
	const [tempo, setTempo] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [step]);
	const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));
	const back = () => setStep((s) => Math.max(1, s - 1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		step,
		onBack: step > 1 ? back : void 0,
		children: [
			step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step1Hero, { next }),
			step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step2Dores, {
				next,
				back,
				selected: dores,
				setSelected: setDores
			}),
			step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step3Desejos, {
				next,
				back,
				selected: desejos,
				setSelected: setDesejos
			}),
			step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step4Testemunhos, {
				next,
				back
			}),
			step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step5Autora, {
				next,
				back
			}),
			step === 6 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step6Aviso, {
				next,
				back
			}),
			step === 7 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step7Tempo, {
				next,
				back,
				choice: tempo,
				setChoice: setTempo
			}),
			step === 8 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step8Protocolo, {
				next,
				back
			}),
			step === 9 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step9Resultados, {
				next,
				back
			}),
			step === 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step10ParaQuem, { next }),
			step === 11 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step11Oferta, { next }),
			step === 12 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step12Transformacao, { next }),
			step === 13 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step13Preco, { next }),
			step === 14 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step14Checkout, {})
		]
	});
}
function QuizContainer({ config }) {
	const quiz = useQuiz(config);
	if (config.slug === "parar-de-procrastinar") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PararDeProcrastinarFlow, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-screen bg-background flex flex-col",
		children: config.slug === "diagnostico-gratuito" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiagnosticoGratuitoFlow, {
			config,
			quiz
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizTopbar, {
			brand: config.brand,
			cta: config.topbarCta
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1",
			children: [
				quiz.stage === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {
					hero: config.hero,
					onStart: quiz.start
				}),
				quiz.stage === "questions" && quiz.currentQuestion && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Question, {
					question: quiz.currentQuestion,
					index: quiz.index,
					total: quiz.total,
					onAnswer: quiz.answer,
					onBack: quiz.back,
					canGoBack: true
				}),
				quiz.stage === "processing" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Processing, {
					title: config.processing.title,
					steps: config.processing.steps,
					onComplete: quiz.finishProcessing
				}),
				quiz.stage === "result" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Result, {
					diagnosis: quiz.diagnosis,
					offer: config.offer,
					brand: config.brand
				})
			]
		})] })
	});
}
function QuizPage() {
	const { quiz } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizContainer, { config: quiz });
}
//#endregion
export { QuizPage as component };
