/* Tabelle di coniugazione italiana: modelli regolari e verbi frequenti */
window.IT_VERBS = [
  { infinitive: "parlare", meaning: "hablar", group: "-are · regular", auxiliary: "avere", participle: "parlato", present: ["parlo","parli","parla","parliamo","parlate","parlano"], subjunctive: ["parli","parli","parli","parliamo","parliate","parlino"], remote: ["parlai","parlasti","parlò","parlammo","parlaste","parlarono"], imperative: ["parla","parliamo","parlate"], futureStem: "parler" },
  { infinitive: "credere", meaning: "creer", group: "-ere · regular", auxiliary: "avere", participle: "creduto", present: ["credo","credi","crede","crediamo","credete","credono"], subjunctive: ["creda","creda","creda","crediamo","crediate","credano"], remote: ["credei","credesti","credé","credemmo","credeste","crederono"], imperative: ["credi","crediamo","credete"], futureStem: "creder" },
  { infinitive: "dormire", meaning: "dormir", group: "-ire · regular", auxiliary: "avere", participle: "dormito", present: ["dormo","dormi","dorme","dormiamo","dormite","dormono"], subjunctive: ["dorma","dorma","dorma","dormiamo","dormiate","dormano"], remote: ["dormii","dormisti","dormì","dormimmo","dormiste","dormirono"], imperative: ["dormi","dormiamo","dormite"], futureStem: "dormir" },
  { infinitive: "finire", meaning: "terminar", group: "-ire · in -isc-", auxiliary: "avere", participle: "finito", present: ["finisco","finisci","finisce","finiamo","finite","finiscono"], subjunctive: ["finisca","finisca","finisca","finiamo","finiate","finiscano"], remote: ["finii","finisti","finì","finimmo","finiste","finirono"], imperative: ["finisci","finiamo","finite"], futureStem: "finir" },
  { infinitive: "essere", meaning: "ser / estar", group: "irregular", auxiliary: "essere", participle: "stato", present: ["sono","sei","è","siamo","siete","sono"], subjunctive: ["sia","sia","sia","siamo","siate","siano"], remote: ["fui","fosti","fu","fummo","foste","furono"], imperative: ["sii","siamo","siate"], futureStem: "sar" },
  { infinitive: "avere", meaning: "tener / haber", group: "irregular", auxiliary: "avere", participle: "avuto", present: ["ho","hai","ha","abbiamo","avete","hanno"], subjunctive: ["abbia","abbia","abbia","abbiamo","abbiate","abbiano"], remote: ["ebbi","avesti","ebbe","avemmo","aveste","ebbero"], imperative: ["abbi","abbiamo","abbiate"], futureStem: "avr" },
  { infinitive: "andare", meaning: "ir", group: "irregular", auxiliary: "essere", participle: "andato", present: ["vado","vai","va","andiamo","andate","vanno"], subjunctive: ["vada","vada","vada","andiamo","andiate","vadano"], remote: ["andai","andasti","andò","andammo","andaste","andarono"], imperative: ["va’","andiamo","andate"], futureStem: "andr" },
  { infinitive: "fare", meaning: "hacer", group: "irregular", auxiliary: "avere", participle: "fatto", present: ["faccio","fai","fa","facciamo","fate","fanno"], subjunctive: ["faccia","faccia","faccia","facciamo","facciate","facciano"], remote: ["feci","facesti","fece","facemmo","faceste","fecero"], imperative: ["fa’","facciamo","fate"], futureStem: "far" },
  { infinitive: "dire", meaning: "decir", group: "irregular", auxiliary: "avere", participle: "detto", present: ["dico","dici","dice","diciamo","dite","dicono"], subjunctive: ["dica","dica","dica","diciamo","diciate","dicano"], remote: ["dissi","dicesti","disse","dicemmo","diceste","dissero"], imperative: ["di’","diciamo","dite"], futureStem: "dir" },
  { infinitive: "venire", meaning: "venir", group: "irregular", auxiliary: "essere", participle: "venuto", present: ["vengo","vieni","viene","veniamo","venite","vengono"], subjunctive: ["venga","venga","venga","veniamo","veniate","vengano"], remote: ["venni","venisti","venne","venimmo","veniste","vennero"], imperative: ["vieni","veniamo","venite"], futureStem: "verr" },
  { infinitive: "potere", meaning: "poder", group: "irregular", auxiliary: "avere", participle: "potuto", present: ["posso","puoi","può","possiamo","potete","possono"], subjunctive: ["possa","possa","possa","possiamo","possiate","possano"], remote: ["potei","potesti","poté","potemmo","poteste","poterono"], imperative: null, futureStem: "potr" },
  { infinitive: "volere", meaning: "querer", group: "irregular", auxiliary: "avere", participle: "voluto", present: ["voglio","vuoi","vuole","vogliamo","volete","vogliono"], subjunctive: ["voglia","voglia","voglia","vogliamo","vogliate","vogliano"], remote: ["volli","volesti","volle","volemmo","voleste","vollero"], imperative: ["vuoi","vogliamo","volete"], futureStem: "vorr" },
  { infinitive: "dovere", meaning: "deber", group: "irregular", auxiliary: "avere", participle: "dovuto", present: ["devo","devi","deve","dobbiamo","dovete","devono"], subjunctive: ["debba","debba","debba","dobbiamo","dobbiate","debbano"], remote: ["dovetti","dovesti","dovette","dovemmo","doveste","dovettero"], imperative: null, futureStem: "dovr" },
  { infinitive: "sapere", meaning: "saber", group: "irregular", auxiliary: "avere", participle: "saputo", present: ["so","sai","sa","sappiamo","sapete","sanno"], subjunctive: ["sappia","sappia","sappia","sappiamo","sappiate","sappiano"], remote: ["seppi","sapesti","seppe","sapemmo","sapeste","seppero"], imperative: ["sappi","sappiamo","sappiate"], futureStem: "sapr" },
  { infinitive: "uscire", meaning: "salir", group: "irregular", auxiliary: "essere", participle: "uscito", present: ["esco","esci","esce","usciamo","uscite","escono"], subjunctive: ["esca","esca","esca","usciamo","usciate","escano"], remote: ["uscii","uscisti","uscì","uscimmo","usciste","uscirono"], imperative: ["esci","usciamo","uscite"], futureStem: "uscir" },
  { infinitive: "bere", meaning: "beber", group: "irregular", auxiliary: "avere", participle: "bevuto", present: ["bevo","bevi","beve","beviamo","bevete","bevono"], subjunctive: ["beva","beva","beva","beviamo","beviate","bevano"], remote: ["bevvi","bevesti","bevve","bevemmo","beveste","bevvero"], imperative: ["bevi","beviamo","bevete"], futureStem: "berr" }
];

window.IT_TENSES = [
  { id: "presente", label: "Presente", mode: "present" },
  { id: "passato-prossimo", label: "Passato prossimo", mode: "compound", auxiliary: "present" },
  { id: "imperfetto", label: "Imperfetto", mode: "imperfect" },
  { id: "trapassato-prossimo", label: "Trapassato prossimo", mode: "compound", auxiliary: "imperfect" },
  { id: "futuro-semplice", label: "Futuro semplice", mode: "future" },
  { id: "futuro-anteriore", label: "Futuro anteriore", mode: "compound", auxiliary: "future" },
  { id: "condizionale-presente", label: "Condizionale presente", mode: "conditional" },
  { id: "condizionale-passato", label: "Condizionale passato", mode: "compound", auxiliary: "conditional" },
  { id: "congiuntivo-presente", label: "Congiuntivo presente", mode: "subjunctive" },
  { id: "congiuntivo-passato", label: "Congiuntivo passato", mode: "compound", auxiliary: "subjunctive" },
  { id: "imperativo", label: "Imperativo", mode: "imperative" },
  { id: "passato-remoto", label: "Passato remoto · C1", mode: "remote" }
];

window.IT_PRONOUNS = ["io","tu","lui / lei","noi","voi","loro"];
