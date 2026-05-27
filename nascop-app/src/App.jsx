import { GUIDELINES_FULL_TEXT } from './guidelines_text.js';

const TEAL = { bg: "#0F6E56", light: "#E1F5EE", mid: "#1D9E75", dark: "#085041", text: "#04342C" };
const AMBER = { bg: "#BA7517", light: "#FAEEDA", mid: "#EF9F27", dark: "#633806", text: "#412402" };
const RED = { bg: "#A32D2D", light: "#FCEBEB", mid: "#E24B4A", dark: "#791F1F", text: "#501313" };
const BLUE = { bg: "#185FA5", light: "#E6F1FB", mid: "#378ADD", dark: "#0C447C", text: "#042C53" };
const PURPLE = { bg: "#534AB7", light: "#EEEDFE", mid: "#7F77DD", dark: "#3C3489", text: "#26215C" };
const GREEN = { bg: "#3B6D11", light: "#EAF3DE", mid: "#639922", dark: "#27500A", text: "#173404" };

const SYSTEM_PROMPT = "You are a clinical decision-support assistant for healthcare workers in Kenya. Answer questions strictly and only from the official Kenya Integrated Guidelines for Prevention, Treatment and Management of HIV, STIs and Viral Hepatitis 2026 Edition (NASCOP). Do not use any outside knowledge. If the answer is not in the guidelines say: This is not covered in the 2026 Kenya Guidelines. GUIDELINES DOCUMENT: " + GUIDELINES_FULL_TEXT;

KEY GUIDELINE CONTENT:

== ART REGIMENS ==
- Preterm <37wks and <2kg: AZT+3TC+NVP
- Birth–4 weeks (≥37wks, 2–2.9kg): ABC+3TC+pDTG
- >4 weeks, 3–24.9kg: Paediatric ABC+3TC+DTG (pALD)
- ≥25kg: TAF+3TC+DTG
- ≥15 years: TAF/TDF+3TC+DTG (preferred)
- Pregnant/Breastfeeding: TDF+3TC+DTG (preferred)
- DTG-anchored regimens preferred across all ages
- Use TAF for: PLHIV ≥60yrs, children ≥25kg switching from ABC, comorbidities (DM, HTN, osteoporosis risk, CrCl >30ml/min)
- Same-day ART initiation; defer ONLY for CM or TB meningitis

== VIRAL LOAD MONITORING ==
- Baseline VL at ART start
- Repeat at 3 months, 6 months, then every 6 months if suppressed
- Treatment failure suspected: VL ≥1000 copies/ml after ≥3 months on ART
- Persistent Low Level Viremia (pLLV): VL 200–999 on 2 consecutive measures
- All VL ≥200: assess adherence, intensify support, repeat VL at 3 months
- Confirmed failure (repeat VL ≥1000): consult RTWG, consider DRT

== PEP ==
- Initiate within 72 hours of exposure (sooner = better)
- Duration: 28 days
- Preferred regimen: TDF+3TC+DTG (adults/adolescents ≥25kg)
- Follow-up: HIV test at baseline, 6 weeks, 3 months; STI/HBV screen
- Contraindicated if source known HIV-negative or exposure >72h ago

== PrEP ==
Options:
1. Daily oral PrEP: TDF/FTC or TDF/3TC (any HIV-negative adult at risk)
2. Event-driven (ED) PrEP: 2 pills 2–24h before sex, 1 pill 24h after, 1 pill 48h after (MSM only)
3. CAB-LA: 600mg IM injection – initiation: 2 doses 4 weeks apart, then every 8 weeks
4. LEN PrEP: 927mg SC every 6 months
5. Ring PrEP (DVR): dapivirine vaginal ring, changed every 28 days (women ≥18)
- Screen for HIV at each visit; if seroconversion on PrEP: stop immediately, DRT, link to ART

== ADVANCED HIV DISEASE (AHD) ==
- Defined: CD4 <200, WHO stage 3 or 4, children <5 regardless of CD4
- CD4 testing for: newly diagnosed, returning after ≥3 months TI, confirmed treatment failure, severely ill/hospitalized
- Cryptococcal screening: CrAg blood test for all adolescents+adults with CD4 ≤200
- Fluconazole prophylaxis: 12 weeks for CD4 <200 and negative CrAg
- CM Induction: Liposomal AmB 10mg/kg single dose + Flucytosine 100mg/kg/day ÷4 doses × 14 days + Fluconazole 1200mg/day (adult) × 14 days
- Defer ART until 5 weeks after CM treatment
- STOP AIDS for children: Screen OIs, Treat OIs+malnutrition, Optimize ART, Prevent (CTX, fluconazole, TPT, vaccines)

== TB/HIV ==
- ICF tool screening at every visit
- Presumptive TB → mWRD as initial diagnostic
- LF-LAM for: AHD, danger signs, hospitalized, or outpatient presumptive TB
- TB/HIV: start anti-TB first; ART within 2 weeks for pulmonary TB; defer 4–8 weeks for TB meningitis
- TPT eligibility: TB screen negative → assess TPT; preferred: 3HP (3 months weekly INH+RIF) or 1HP (1 month daily INH+RIF)
- Preferred ART with TB: DTG-based (adjust doses per rifampicin interaction – DTG 50mg BD)

== CRYPTOCOCCAL MENINGITIS ==
- All with positive CrAg → LP mandatory
- Consolidation: Fluconazole 800mg/day × 8 weeks
- Maintenance: Fluconazole 200mg/day × 1 year
- Pre-emptive for non-meningeal disease (bCrAg+, CSF negative): Fluconazole 400mg/day × 2 weeks then 200mg/day × 8 weeks

== PMTCT / TRIPLE ELIMINATION ==
- Test for HIV, HBsAg, syphilis at 1st ANC; retest per schedule through delivery and breastfeeding
- Preferred ART for PBFW: TDF+3TC+DTG
- Vertical transmission risk assessment: 1st ANC, 3rd trimester, labour, postnatal
- HEI DNA PCR: at birth/within 2 weeks, 6 weeks, 6 months, 12 months
- Antibody test: 18 months, every 6 months, and 6 weeks after breastfeeding stops
- High-risk HEI prophylaxis: ABC/3TC/DTG × 14 weeks, then NVP until 6 weeks after breastfeeding stops
- Low-risk HEI: AZT+NVP birth–6 weeks, then NVP until 6 weeks after breastfeeding stops
- HBV birth dose vaccine within 24 hours; HBIG for confirmed perinatal HBV exposure
- TDF prophylaxis for HBsAg-positive pregnant women to prevent VT of HBV

== STI MANAGEMENT ==
- Kenya has shifted from syndromic to clinical/etiological diagnosis
- Key syndromes → etiological workup required
Genital Ulcer Disease: Syphilis (Treponema pallidum), Chancroid (H. ducreyi), Genital herpes (HSV-2)
- Syphilis: Benzathine penicillin G 2.4MU IM single dose (primary/secondary/early latent); 3 doses weekly for late latent/unknown duration
Urethritis/Cervicitis: Gonorrhoea (N. gonorrhoeae), Chlamydia (C. trachomatis)
- Gonorrhoea: Ceftriaxone 500mg IM single dose + Azithromycin 1g oral single dose
- Chlamydia: Doxycycline 100mg BD × 7 days or Azithromycin 1g single dose
Vaginal discharge/Vaginitis: BV (Gardnerella), Trichomoniasis, Candidiasis
- BV: Metronidazole 400–500mg BD × 7 days
- Trichomoniasis: Metronidazole 2g single dose
- Candida: Clotrimazole 100mg PV × 7 days or Fluconazole 150mg oral single dose
PID: Cefoxitin 2g IV + Doxycycline 100mg IV, then oral to complete 14 days

== VIRAL HEPATITIS ==
HBV:
- CHB: HBsAg detectable (6 months persistence in children)
- Treatment eligibility: Liver disease severity OR HBV DNA >2000 IU/mL + ALT elevation OR coinfections/comorbidities
- Preferred: TDF or Entecavir (ETV)
- Children dosing: ETV oral solution ≥12yrs per weight; TDF ≥12yrs ≥35kg
- Monitor: HBsAg, HBeAg/anti-HBe, HBV DNA, LFTs, fibrosis assessment
- Non-invasive fibrosis: FIB-4, APRI, elastography

HCV:
- One-time anti-HCV for persons with recognized risk
- Annual testing for ongoing risk
- DAA regimens (adults): Sofosbuvir/Daclatasvir × 12 weeks (±Ribavirin for cirrhosis × 24 weeks); Sofosbuvir/Ledipasvir or Sofosbuvir/Velpatasvir per genotype
- Children >3 years: Sofosbuvir/Ledipasvir or Sofosbuvir/Velpatasvir (genotype-specific)
- SVR12 = cure; retest RNA 12 weeks after treatment

== KEY & VULNERABLE POPULATIONS ==
MSM, FSW, PWID, Transgender, Prisoners, AGYW, Migrants
- Offer PrEP, condoms, regular STI/HIV testing, harm reduction, mental health support
- PWID: needle/syringe programs, OST (methadone/buprenorphine), HIV and HCV testing and treatment

== DSD (DIFFERENTIATED SERVICE DELIVERY) ==
- Multi-month dispensing (MMD): 3–6 months supply for stable clients
- Community refill groups, CARG, fast-track dispensing
- Stable client: suppressed VL, on ART ≥6 months, no acute illness

ALWAYS provide evidence-based responses aligned with the 2026 Kenya guidelines. Cite specific regimens, dosages, and schedules when relevant. Note if something requires RTWG consultation or specialist referral. Keep answers concise and clinically actionable.`;

const sections = [
  {
    id: "hivTesting", title: "HIV Testing", icon: "ti-test-pipe", color: TEAL,
    subsections: [
      { title: "6 Cs of HTS", content: "Consent · Confidentiality · Counselling · Correct results · Connection (linkage) · Creating enabling environment" },
      { title: "Testing Frequency – PBFW", content: "1st ANC visit → retest at 28 weeks → 36 weeks → delivery → 6 weeks postpartum → every 3 months while breastfeeding" },
      { title: "Testing Frequency – KVP", content: "MSM, FSW, PWID: HIV test every 3 months\nGeneral at-risk adults: every 6–12 months\nHEI: DNA PCR at birth (or <2wks), 6wks, 6 months, 12 months; antibody test at 18 months" },
      { title: "Inconclusive HIV Status", content: "Repeat test in 14 days. If still inconclusive, refer for 4th generation Ag/Ab combo test or RNA PCR. Follow up at 3 months." },
      { title: "Linkage Actions", content: "HIV+ → same-day ART enrollment (or within 2 weeks)\nHIV– at risk → offer PrEP\nHIV– pregnant → PrEP, condoms, partner testing\nExposed infant → ARV prophylaxis" },
    ]
  },
  {
    id: "pep", title: "PEP", icon: "ti-shield-check", color: RED,
    subsections: [
      { title: "Eligibility", content: "Exposed to HIV through: sexual assault/rape, occupational needlestick, unprotected sex with known HIV+ partner\nMust initiate within 72 hours (sooner = more effective)\nContraindicated if: >72hrs elapsed OR source confirmed HIV-negative" },
      { title: "Preferred Regimen", content: "Adults & adolescents ≥25kg:\nTDF 300mg + 3TC 300mg + DTG 50mg — all ONCE DAILY × 28 days\n\nChildren 3–<25kg:\nABC + 3TC + DTG (pALD dosing by weight)\n\nPregnant women:\nTDF+3TC+DTG × 28 days (safe in pregnancy)" },
      { title: "Follow-up Schedule", content: "Day 0: Baseline HIV, HBV (HBsAg), STI screen, pregnancy test, renal function\nDay 3–5: Adherence check, side effect review\nWeek 4: Complete PEP, HIV test\n3 months: Final HIV test, STI screen\nOffer PrEP if ongoing risk" },
      { title: "HBV in PEP", content: "TDF in PEP regimen provides HBV protection\nIf HBsAg positive: continue TDF, add HBV-specific monitoring\nVaccinate if HBsAg-negative and unvaccinated" },
    ]
  },
  {
    id: "prep", title: "PrEP", icon: "ti-heart-rate-monitor", color: BLUE,
    subsections: [
      { title: "PrEP Products (2026)", content: "1. Daily Oral: TDF/FTC or TDF/3TC – any at-risk HIV-negative person\n2. Event-Driven (MSM only): 2 pills 2–24h pre-sex, 1 pill 24h after, 1 pill 48h after\n3. CAB-LA: 600mg IM – init: 2 doses 4wks apart, then every 8 weeks\n4. LEN PrEP: 927mg SC every 6 months\n5. Ring (DVR): Dapivirine vaginal ring, change every 28 days (women ≥18)" },
      { title: "Eligibility Criteria", content: "HIV-negative (confirmed)\nAND any of:\n• Partner known HIV+ not virally suppressed\n• STI in past 6 months\n• Inconsistent condom use with high-risk partners\n• PWID sharing equipment\n• Requesting PrEP\n• AGYW / KVP at ongoing risk\n• Pregnant or breastfeeding at risk" },
      { title: "Monitoring on PrEP", content: "HIV test at every PrEP visit (before refill)\nRenal function: baseline, 3 months, then every 6 months (oral PrEP)\nSTI screen: every 3–6 months\nCAB-LA/LEN: HIV test before each injection\nIf HIV+ on PrEP: STOP immediately, collect DRT sample, initiate ART" },
      { title: "Switching Between Products", content: "Oral → CAB-LA: Give 2nd injection on last oral pill day or overlap 4 weeks\nCAB-LA → Oral: Start oral on day of injection due (if not injecting)\nLEN → Any product: Start new PrEP 6 months after last LEN injection\nDVR → CAB-LA: Overlap 2 days, then remove ring" },
    ]
  },
  {
    id: "art", title: "ART Regimens", icon: "ti-pill", color: GREEN,
    subsections: [
      { title: "First-Line Regimens by Age/Weight", content: "Preterm <37wks, <2kg: AZT + 3TC + NVP\nBirth–4wks (≥37wks, 2–2.9kg): ABC + 3TC + pDTG\n>4wks–24.9kg: pALD (paediatric ABC+3TC+DTG)\n≥25kg (any age): TAF + 3TC + DTG\n≥15 years: TAF/TDF + 3TC + DTG\nPregnant/BF women: TDF + 3TC + DTG" },
      { title: "Use TAF When…", content: "• Age ≥60 years\n• Children ≥25kg switching from ABC-based regimen\n• Diabetes mellitus, hypertension, osteoporosis risk\n• Chronic renal failure (CrCl >30 ml/min)\n• Note: TAF contraindicated if CrCl <15 ml/min" },
      { title: "ART Initiation Timing", content: "Same day or within 2 weeks of diagnosis\n\nDEFER initiation for:\n• Cryptococcal meningitis → defer 5 weeks after CM treatment\n• TB meningitis → defer 4–8 weeks\n\nNEVER delay for lab results being unavailable" },
      { title: "Viral Load Monitoring", content: "Baseline: at ART start\n3 months after start\n6 months after start\nThen every 6 months if suppressed (<1000)\n\nUnsuppressed (VL ≥200): intensify adherence, repeat in 3 months\nTreatment failure = confirmed VL ≥1000 after adherence addressed\npLLV (200–999 on 2 tests): manage as for initial VL ≥1000" },
      { title: "Second-Line Regimens", content: "Failing DTG-based regimen → consult RTWG, send for Drug Resistance Testing (DRT)\n\nGeneral second-line approach:\nIf on NRTI+DTG → add PI: LPV/r or ATV/r based on DRT\nAlways verify adherence before diagnosing treatment failure\nInvolve RTWG before switching" },
      { title: "TB/HIV Drug Interactions", content: "Rifampicin reduces DTG levels\nAdjustment: DTG 50mg TWICE DAILY (instead of once daily) when on rifampicin\n\nFor patients already on DTG: Add extra DTG 50mg (total BD)\nFor new ART starters on TB treatment: DTG 50mg BD\nAlternative if DTG unavailable: EFV 600mg daily (not preferred)" },
    ]
  },
  {
    id: "advhiv", title: "Advanced HIV", icon: "ti-alert-triangle", color: AMBER,
    subsections: [
      { title: "AHD Definition", content: "Adults/adolescents: CD4 <200 cells/mm³ OR WHO Stage 3/4\nChildren <5 years: all HIV-infected regardless of CD4\n\nCD4 testing indicated for:\n• Newly diagnosed PLHIV\n• Returning after ≥3 months treatment interruption\n• Confirmed treatment failure\n• Severely ill or hospitalized" },
      { title: "Cryptococcal Screening", content: "Screen: All adolescents (≥10yrs) and adults with CD4 ≤200\nTest: Blood CrAg (lateral flow assay)\n\nCrAg NEGATIVE + CD4 <200:\n→ Fluconazole prophylaxis 200mg/day × 12 weeks\n\nCrAg POSITIVE:\n→ LP mandatory → check CSF" },
      { title: "CM Induction (Preferred)", content: "Liposomal AmB 10mg/kg IV — SINGLE DOSE\n+ Flucytosine 100mg/kg/day ÷ 4 doses × 14 days\n+ Fluconazole 1200mg/day (adult) or 12mg/kg/day (child, max 800mg) × 14 days\n\nConsolidation (after induction):\nFluconazole 800mg/day × 8 weeks\n\nMaintenance:\nFluconazole 200mg/day × ≥1 year\n\nDefer ART: 5 weeks after starting CM treatment" },
      { title: "STOP AIDS (Children/Adolescents)", content: "S – Screen: OIs, nutritional status\nT – Treat: OIs and malnutrition\nO – Optimize: ART (ensure correct regimen, adherence)\nP – Prevent: Vaccinations, Cotrimoxazole, Fluconazole prophylaxis, TB Preventive Therapy (TPT)" },
      { title: "TB/HIV Screening & Treatment", content: "EVERY visit: ICF 4-symptom screen (cough, fever, weight loss, night sweats)\n\nScreen negative → assess TPT eligibility\nScreen positive (presumptive TB) → mWRD (GeneXpert) + CXR\nLF-LAM: use for AHD, hospitalized, danger signs, outpatient presumptive TB\n\nTB treatment start:\nPulmonary TB: start ART within 2 weeks of anti-TB\nTB meningitis: defer ART 4–8 weeks\nAlready on ART: continue ART, adjust for interactions" },
    ]
  },
  {
    id: "pmtct", title: "PMTCT", icon: "ti-baby-carriage", color: PURPLE,
    subsections: [
      { title: "Triple Elimination Tests at 1st ANC", content: "Screen at EVERY 1st ANC visit:\n1. HIV test\n2. Syphilis RPR/TPHA\n3. HBsAg\n\nRetest schedule:\n28 weeks → 36 weeks → Delivery → 6wks postpartum → every 3 months breastfeeding" },
      { title: "ART for Pregnant/BF Women", content: "Preferred: TDF + 3TC + DTG (once daily)\n\nInitiation: same-day or within 2 weeks\nContinue for life regardless of CD4/VL\n\nVT risk assessment timing:\n• 1st ANC visit\n• 3rd trimester\n• Labour and delivery\n• Postnatal" },
      { title: "HEI Testing Schedule", content: "DNA PCR: birth/≤2 weeks, 6 weeks, 6 months, 12 months\n\nAntibody test: 18 months, every 6 months, AND 6 weeks after complete cessation of breastfeeding\n\nHigh-risk = any of: maternal VL detectable near delivery, no ART, late ANC, suboptimal prophylaxis" },
      { title: "Infant Prophylaxis", content: "HIGH RISK:\nABC + 3TC + DTG × 14 weeks\nThen NVP until 6 weeks after breastfeeding stops\n\nLOW RISK:\nAZT + NVP birth → 6 weeks\nThen NVP until 6 weeks after breastfeeding stops\n\nHBV exposure: HBV vaccine birth dose + HBIG within 24 hours" },
      { title: "HBV in Pregnancy", content: "All HBsAg-positive pregnant women:\n→ TDF prophylaxis (antiviral) to prevent vertical transmission\n→ Infant: HBV vaccine birth dose within 24 hours + HBIG\n→ Follow EPI schedule for subsequent HBV doses\n\nAntiviral therapy assessment: as per adult CHB criteria" },
    ]
  },
  {
    id: "sti", title: "STIs", icon: "ti-stethoscope", color: RED,
    subsections: [
      { title: "Diagnosis Approach (2026 Change)", content: "KENYA NOW USES: Clinical and Etiological Diagnosis (NOT syndromic management)\n\nLaboratory confirmation required:\n• NAAT/PCR for gonorrhoea and chlamydia\n• Syphilis: RPR + TPHA/VDRL\n• HSV PCR or clinical\n• Wet prep/culture for BV, candida, trichomonas\n\nClinical diagnosis: ONLY if lab unavailable" },
      { title: "Genital Ulcer Disease", content: "Syphilis (primary): Benzathine Penicillin G 2.4MU IM single dose\nSyphilis (late latent/unknown): 2.4MU IM weekly × 3 doses\nSyphilis (neuro/ocular): Aqueous Penicillin G 18–24MU/day IV × 10–14 days\n\nGenital Herpes: Aciclovir 400mg TDS × 7–10 days (first episode); 400mg BD × 6–12 months (suppression)\n\nChancroid: Azithromycin 1g single dose OR Ceftriaxone 250mg IM single dose" },
      { title: "Urethritis / Cervicitis", content: "Gonorrhoea:\nCeftriaxone 500mg IM × single dose + Azithromycin 1g oral × single dose\n(Dual therapy due to AMR concerns)\n\nChlamydia:\nDoxycycline 100mg BD × 7 days\nOR Azithromycin 1g oral single dose (if compliance concern)\n\nAlways treat partner(s)" },
      { title: "Vaginal Discharge / Vaginitis", content: "Bacterial Vaginosis:\nMetronidazole 400–500mg BD × 7 days\nOR Metronidazole gel 0.75% PV × 5 days\n\nTrichomoniasis:\nMetronidazole 2g oral single dose (treat partner)\n\nVulvovaginal Candidiasis:\nClotrimazole 100mg PV × 7 days\nOR Fluconazole 150mg oral single dose (not in pregnancy – 1st trimester)" },
      { title: "Pelvic Inflammatory Disease (PID)", content: "Outpatient (mild-moderate):\nCeftriaxone 500mg IM × 1 + Doxycycline 100mg BD + Metronidazole 400mg BD × 14 days\n\nInpatient (severe):\nCefoxitin 2g IV q6h + Doxycycline 100mg IV BD → switch to oral when improved\nOR Clindamycin 900mg IV q8h + Gentamicin 1.5mg/kg IV q8h\n→ Continue oral to complete 14 days" },
      { title: "Genital Warts & Proctitis", content: "Genital Warts (HPV):\nTopical: Podophyllin 10–25% weekly (clinic-applied) × up to 6 applications\nOR Imiquimod 5% cream 3×/week × up to 16 weeks (self-applied)\nCryotherapy, surgical excision for larger lesions\n\nProctitis (gonorrhoea/chlamydia/herpes):\nTreat per specific aetiology; dual therapy for GC recommended" },
    ]
  },
  {
    id: "vh", title: "Viral Hepatitis", icon: "ti-activity", color: AMBER,
    subsections: [
      { title: "HBV: Who to Test & When", content: "Baseline HBsAg for:\n• All newly diagnosed HIV patients\n• All new STI patients\n• Anyone initiating PrEP\n• Pregnant women at 1st ANC\n• Persons with risk factors\n\nAll children to receive HBV birth dose vaccine within 24 hours" },
      { title: "HBV Diagnostic Markers", content: "HBsAg: surface antigen = infection marker\nHBeAg: high replication, high infectivity\nAnti-HBe: seroconversion, lower replication\nAnti-HBs: immunity (vaccination or recovery)\nHBV DNA: viral replication quantification\nLFTs (ALT/AST): liver inflammation\nFIB-4 / APRI: non-invasive fibrosis scoring" },
      { title: "HBV Treatment Eligibility", content: "Treat if ANY of:\n• Evidence of liver disease (elevated ALT, fibrosis)\n• HBV DNA >2000 IU/mL + ALT elevation\n• Cirrhosis (regardless of HBV DNA/ALT)\n• Coinfection (HIV, HCV, HDV)\n• Extrahepatic manifestations\n• Immunosuppression\n• Pregnancy with HBV DNA >200,000 IU/mL\n\nPreferred regimen:\nTDF (300mg/day) or Entecavir 0.5mg/day (1mg/day if LMV-experienced)" },
      { title: "HCV: Testing & Treatment", content: "Testing:\n• One-time anti-HCV for persons with recognized past risk\n• Annual anti-HCV for ongoing risk (PWID, haemodialysis, etc.)\n• If anti-HCV positive → HCV RNA to confirm active infection\n\nTreatment (DAA regimens, adults):\nSofosbuvir/Daclatasvir 400mg/60mg × 12 weeks\n(+ Ribavirin 1000–1200mg/day × 24 weeks if cirrhosis)\n\nSOF/LDV or SOF/VEL per genotype – 12 weeks\nSVR12 (undetectable RNA 12 wks post-treatment) = CURED" },
      { title: "Hepatitis D (HDV)", content: "Occurs ONLY with HBV co/superinfection\nScreen: Anti-HDV antibody if HBsAg positive\nSuperinfection → more severe, higher risk cirrhosis\nTreatment: Pegylated IFN-alpha × 48 weeks (only approved therapy)\nPrevent: HBV vaccination prevents HDV" },
    ]
  },
];

const algorithms = [
  {
    id: "vl_algo", title: "Viral Load Algorithm",
    steps: [
      { label: "VL result received", type: "start" },
      { label: "VL <200 copies/ml", type: "decision", yes: "Continue routine monitoring (every 6 months)", no: "VL 200–999 (pLLV) or ≥1000" },
      { label: "Assess & address ALL adherence barriers", type: "action" },
      { label: "Intensify adherence support (EAC)", type: "action" },
      { label: "Repeat VL after 3 months confirmed excellent adherence", type: "action" },
      { label: "Repeat VL <200?", type: "decision", yes: "Suppress → routine monitoring", no: "Repeat 200–999: further adherence / VL ≥1000: consult RTWG + DRT" },
    ]
  },
  {
    id: "crag_algo", title: "CrAg Screening Algorithm",
    steps: [
      { label: "Newly diagnosed PLHIV or returning to care", type: "start" },
      { label: "CD4 ≤200 cells/mm³?", type: "decision", yes: "Screen with blood CrAg", no: "No CrAg screening; start ART routinely" },
      { label: "Blood CrAg result", type: "action" },
      { label: "CrAg positive?", type: "decision", yes: "LP mandatory — assess CSF", no: "CrAg negative → Fluconazole prophylaxis 200mg/day × 12 weeks → Initiate ART" },
      { label: "CSF positive (CM)", type: "action" },
      { label: "Initiate CM treatment (Liposomal AmB + 5FC + Fluconazole)", type: "action" },
      { label: "Defer ART for 5 weeks", type: "action" },
    ]
  },
  {
    id: "hei_algo", title: "HIV-Exposed Infant (HEI) Algorithm",
    steps: [
      { label: "HIV-Exposed Infant born", type: "start" },
      { label: "Risk assessment: maternal VL, ART status, adherence", type: "action" },
      { label: "High risk?", type: "decision", yes: "ABC+3TC+DTG × 14wks, then NVP until 6wks post-BF", no: "AZT+NVP birth–6wks, then NVP until 6wks post-BF" },
      { label: "DNA PCR at birth / ≤2 weeks", type: "action" },
      { label: "PCR positive?", type: "decision", yes: "Immediate ART initiation (pALD by weight)", no: "Continue prophylaxis; retest at 6wks, 6mo, 12mo" },
      { label: "Antibody test at 18 months (and 6wks after breastfeeding stops)", type: "action" },
    ]
  },
];

export default function App() {
  const [tab, setTab] = useState("home");
  const [activeSection, setActiveSection] = useState(null);
  const [activeAlgo, setActiveAlgo] = useState(null);
  const [expandedSub, setExpandedSub] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { role: "assistant", content: "Hello! I'm your Kenya HIV/STI/VH 2026 Guidelines assistant. Ask me about ART regimens, PEP/PrEP protocols, dosing, algorithms, or any clinical question from the guidelines." }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

 const sendMessage = async () => {
    if (!chatInput.trim() || isLoading) return;
    const userMsg = chatInput.trim();
    setChatInput("");
    setChatMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);
    try {
      const history = chatMessages.slice(-8).map(m => ({ role: m.role, content: m.content }));
      const apiKey = import.meta.env.VITE_GEMINI_KEY;
      const resp = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [...history, { role: "user", content: userMsg }].map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }]
          }))
        })
      });
      const data = await resp.json();
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text 
        || data.error?.message 
        || JSON.stringify(data).slice(0, 200);
      setChatMessages(prev => [...prev, { role: "assistant", content: answer }]);
    } catch {
      setChatMessages(prev => [...prev, { role: "assistant", content: "Connection error. Please check your network and try again." }]);
    }
    setIsLoading(false);
  };

  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results = [];
    sections.forEach(sec => {
      sec.subsections.forEach(sub => {
        if (sub.title.toLowerCase().includes(q) || sub.content.toLowerCase().includes(q) || sec.title.toLowerCase().includes(q)) {
          results.push({ sectionId: sec.id, sectionTitle: sec.title, subTitle: sub.title, content: sub.content, color: sec.color });
        }
      });
    });
    return results.slice(0, 6);
  };

  const styles = {
    app: { fontFamily: "'Segoe UI', system-ui, sans-serif", maxWidth: 480, margin: "0 auto", background: "#F8FAF9", minHeight: "100vh", display: "flex", flexDirection: "column" },
    header: { background: TEAL.bg, color: "#fff", padding: "16px 20px 12px", display: "flex", alignItems: "center", gap: 10 },
    headerTitle: { fontSize: 17, fontWeight: 600, margin: 0, flex: 1 },
    headerSub: { fontSize: 11, opacity: 0.8, margin: 0 },
    body: { flex: 1, overflow: "auto", paddingBottom: 64 },
    nav: { position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 480, background: "#fff", borderTop: "1px solid #E0EAE6", display: "flex", zIndex: 100 },
    navBtn: (active) => ({ flex: 1, padding: "8px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, background: "none", border: "none", cursor: "pointer", color: active ? TEAL.bg : "#94A3AA", fontSize: 10, fontWeight: active ? 600 : 400 }),
    card: (color) => ({ background: "#fff", borderRadius: 14, border: `1px solid ${color.light}`, overflow: "hidden", marginBottom: 12 }),
    cardHeader: (color) => ({ background: color.light, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }),
    cardTitle: (color) => ({ fontSize: 15, fontWeight: 600, color: color.text, margin: 0 }),
    subCard: { padding: "12px 16px", borderBottom: "1px solid #EFF4F2", cursor: "pointer" },
    subTitle: { fontSize: 14, fontWeight: 600, color: "#1A2E28", margin: "0 0 4px" },
    subContent: { fontSize: 13, color: "#4A6560", lineHeight: 1.6, whiteSpace: "pre-line", margin: 0 },
    sectionGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "16px 16px 0" },
    sectionCard: (color) => ({ background: "#fff", borderRadius: 14, padding: "16px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, border: `1px solid ${color.light}`, cursor: "pointer", textAlign: "center" }),
    sectionIcon: (color) => ({ width: 44, height: 44, borderRadius: 12, background: color.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: color.bg }),
    chip: (color) => ({ background: color.light, color: color.text, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, display: "inline-block" }),
    algoCard: { background: "#fff", borderRadius: 14, margin: "0 16px 12px", border: "1px solid #E0EAE6", overflow: "hidden" },
    algoHeader: { background: TEAL.light, padding: "12px 16px", display: "flex", alignItems: "center", gap: 8, cursor: "pointer" },
    stepBox: (type) => ({
      margin: "8px 16px",
      padding: "10px 14px",
      borderRadius: 10,
      background: type === "start" ? TEAL.light : type === "decision" ? AMBER.light : "#F0F7F4",
      border: `1.5px solid ${type === "start" ? TEAL.mid : type === "decision" ? AMBER.mid : "#C5DDD6"}`,
    }),
    chatContainer: { display: "flex", flexDirection: "column", height: "calc(100vh - 120px)" },
    chatMessages: { flex: 1, overflow: "auto", padding: "16px 16px 8px" },
    msgBubble: (role) => ({
      maxWidth: "85%", padding: "10px 14px", borderRadius: 14, marginBottom: 10, fontSize: 13, lineHeight: 1.6,
      ...(role === "user" ? { marginLeft: "auto", background: TEAL.bg, color: "#fff", borderBottomRightRadius: 4 } : { background: "#fff", color: "#1A2E28", borderBottomLeftRadius: 4, border: "1px solid #E0EAE6" })
    }),
    chatInput: { display: "flex", gap: 8, padding: "10px 16px 16px", background: "#fff", borderTop: "1px solid #E0EAE6" },
    inputField: { flex: 1, padding: "10px 14px", borderRadius: 24, border: "1.5px solid #C5DDD6", fontSize: 14, outline: "none", background: "#F8FAF9" },
    sendBtn: (disabled) => ({ background: disabled ? "#C5DDD6" : TEAL.bg, color: "#fff", border: "none", borderRadius: 24, padding: "10px 18px", fontSize: 14, cursor: disabled ? "not-allowed" : "pointer", fontWeight: 600 }),
    searchInput: { width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #C5DDD6", fontSize: 14, outline: "none", background: "#fff", boxSizing: "border-box" },
    resultCard: (color) => ({ background: "#fff", borderRadius: 12, border: `1px solid ${color.light}`, padding: "12px 14px", marginBottom: 10, cursor: "pointer" }),
  };

  const quickLinks = [
    { label: "ART Regimens", tab: "guidelines", sectionId: "art" },
    { label: "AHD / CM", tab: "guidelines", sectionId: "advhiv" },
    { label: "PEP Protocol", tab: "guidelines", sectionId: "pep" },
    { label: "HEI Algorithm", tab: "algorithms", algoId: "hei_algo" },
  ];

  const renderHome = () => (
    <div>
      <div style={{ background: `linear-gradient(135deg, ${TEAL.bg} 0%, ${TEAL.mid} 100%)`, padding: "20px 20px 24px" }}>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, margin: "0 0 4px" }}>NASCOP Kenya · 2026 Edition</p>
        <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>HIV/STI/VH Integrated Guidelines</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: 0 }}>Clinical decision support for healthcare workers</p>
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#7A9E98", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 10px" }}>Quick Access</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {quickLinks.map(q => (
            <button key={q.label} onClick={() => { setTab(q.tab); if (q.sectionId) setActiveSection(q.sectionId); if (q.algoId) setActiveAlgo(q.algoId); }} style={{ background: "#fff", border: `1px solid ${TEAL.light}`, borderRadius: 12, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: TEAL.text }}>{q.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={styles.sectionGrid}>
        {sections.map(sec => (
          <div key={sec.id} style={styles.sectionCard(sec.color)} onClick={() => { setTab("guidelines"); setActiveSection(sec.id); setExpandedSub(null); }}>
            <div style={styles.sectionIcon(sec.color)}><i className={`ti ${sec.icon}`} aria-hidden="true" /></div>
            <span style={{ fontSize: 13, fontWeight: 600, color: sec.color.text }}>{sec.title}</span>
            <span style={{ fontSize: 11, color: "#7A9E98" }}>{sec.subsections.length} topics</span>
          </div>
        ))}
      </div>
      <div style={{ padding: "16px 16px 0" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#7A9E98", textTransform: "uppercase", letterSpacing: 1, margin: "0 0 10px" }}>Decision Algorithms</p>
        {algorithms.map(algo => (
          <button key={algo.id} onClick={() => { setTab("algorithms"); setActiveAlgo(algo.id); }} style={{ display: "block", width: "100%", background: "#fff", border: "1px solid #E0EAE6", borderRadius: 12, padding: "12px 14px", textAlign: "left", marginBottom: 8, cursor: "pointer" }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "#1A2E28" }}><i className="ti ti-git-branch" style={{ marginRight: 8, color: TEAL.mid }} />{algo.title}</span>
          </button>
        ))}
      </div>
      <div style={{ margin: "16px", background: TEAL.light, borderRadius: 14, padding: "14px 16px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: TEAL.text, margin: "0 0 4px" }}>AI Clinical Assistant</p>
        <p style={{ fontSize: 12, color: TEAL.bg, margin: "0 0 10px" }}>Ask any question about the guidelines</p>
        <button onClick={() => setTab("chat")} style={{ background: TEAL.bg, color: "#fff", border: "none", borderRadius: 20, padding: "8px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Open Assistant →</button>
      </div>
    </div>
  );

  const renderGuidelines = () => {
    const current = activeSection ? sections.find(s => s.id === activeSection) : null;
    if (current) {
      return (
        <div>
          <div style={{ background: current.color.bg, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => { setActiveSection(null); setExpandedSub(null); }} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, color: "#fff", padding: "6px 10px", cursor: "pointer", fontSize: 14 }}>←</button>
            <h2 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: 0 }}>{current.title}</h2>
          </div>
          <div style={{ padding: "12px 16px" }}>
            {current.subsections.map((sub, i) => {
              const isExpanded = expandedSub === i;
              return (
                <div key={i} style={{ background: "#fff", borderRadius: 12, border: `1px solid ${current.color.light}`, marginBottom: 10, overflow: "hidden" }}>
                  <div onClick={() => setExpandedSub(isExpanded ? null : i)} style={{ padding: "12px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", background: isExpanded ? current.color.light : "#fff" }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: current.color.text }}>{sub.title}</span>
                    <i className={`ti ${isExpanded ? "ti-chevron-up" : "ti-chevron-down"}`} style={{ color: current.color.bg }} />
                  </div>
                  {isExpanded && (
                    <div style={{ padding: "12px 14px 14px" }}>
                      <p style={{ fontSize: 13, color: "#2A4040", lineHeight: 1.7, whiteSpace: "pre-line", margin: 0 }}>{sub.content}</p>
                      <button onClick={() => { setTab("chat"); setChatMessages(prev => [...prev, { role: "user", content: `Tell me more about: ${sub.title} (${current.title} section)` }]); setIsLoading(false); }} style={{ marginTop: 12, background: current.color.light, color: current.color.text, border: `1px solid ${current.color.mid}`, borderRadius: 20, padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Ask AI about this →</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return (
      <div style={{ padding: 16 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "#1A2E28", margin: "0 0 16px" }}>Guidelines Sections</h2>
        {sections.map(sec => (
          <div key={sec.id} style={styles.card(sec.color)}>
            <div style={styles.cardHeader(sec.color)} onClick={() => { setActiveSection(sec.id); setExpandedSub(null); }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${sec.color.bg}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: sec.color.bg }}>
                <i className={`ti ${sec.icon}`} aria-hidden="true" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={styles.cardTitle(sec.color)}>{sec.title}</p>
                <p style={{ fontSize: 11, color: sec.color.bg, margin: 0 }}>{sec.subsections.length} topics</p>
              </div>
              <i className="ti ti-chevron-right" style={{ color: sec.color.bg }} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderAlgorithms = () => {
    const current = activeAlgo ? algorithms.find(a => a.id === activeAlgo) : null;
    if (current) {
      return (
        <div>
          <div style={{ background: TEAL.bg, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setActiveAlgo(null)} style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: 8, color: "#fff", padding: "6px 10px", cursor: "pointer", fontSize: 14 }}>←</button>
            <h2 style={{ color: "#fff", fontSize: 16, fontWeight: 700, margin: 0 }}>{current.title}</h2>
          </div>
          <div style={{ padding: 16 }}>
            {current.steps.map((step, i) => (
              <div key={i} style={{ position: "relative" }}>
                {i > 0 && <div style={{ width: 2, height: 16, background: TEAL.light, margin: "0 auto" }} />}
                <div style={{ background: step.type === "start" ? TEAL.light : step.type === "decision" ? AMBER.light : "#F0F7F4", border: `1.5px solid ${step.type === "start" ? TEAL.mid : step.type === "decision" ? AMBER.mid : "#B8D8CE"}`, borderRadius: step.type === "decision" ? 10 : 10, padding: "10px 14px" }}>
                  {step.type === "decision" && <span style={{ fontSize: 10, fontWeight: 700, color: AMBER.bg, textTransform: "uppercase", letterSpacing: 0.5 }}>Decision ▼</span>}
                  <p style={{ fontSize: 13, fontWeight: step.type === "start" ? 700 : 500, color: step.type === "start" ? TEAL.text : step.type === "decision" ? AMBER.text : "#2A4040", margin: step.type === "decision" ? "2px 0 0" : 0 }}>{step.label}</p>
                  {step.yes && (
                    <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                      <div style={{ flex: 1, background: GREEN.light, border: `1px solid ${GREEN.mid}`, borderRadius: 8, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: GREEN.text, margin: "0 0 2px" }}>YES →</p>
                        <p style={{ fontSize: 11, color: GREEN.bg, margin: 0 }}>{step.yes}</p>
                      </div>
                      <div style={{ flex: 1, background: RED.light, border: `1px solid ${RED.mid}`, borderRadius: 8, padding: "6px 10px" }}>
                        <p style={{ fontSize: 11, fontWeight: 700, color: RED.text, margin: "0 0 2px" }}>NO →</p>
                        <p style={{ fontSize: 11, color: RED.bg, margin: 0 }}>{step.no}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <button onClick={() => { setTab("chat"); setChatMessages(prev => [...prev, { role: "user", content: `Explain the ${current.title} in detail with clinical context from the 2026 Kenya guidelines` }]); }} style={{ marginTop: 16, width: "100%", background: TEAL.bg, color: "#fff", border: "none", borderRadius: 12, padding: "12px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Ask AI for more detail →</button>
          </div>
        </div>
      );
    }
    return (
      <div style={{ padding: 16 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "#1A2E28", margin: "0 0 16px" }}>Clinical Algorithms</h2>
        {algorithms.map(algo => (
          <button key={algo.id} onClick={() => setActiveAlgo(algo.id)} style={{ display: "block", width: "100%", background: "#fff", border: "1px solid #E0EAE6", borderRadius: 14, padding: "14px 16px", textAlign: "left", marginBottom: 12, cursor: "pointer" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 40, height: 40, background: TEAL.light, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <i className="ti ti-git-branch" style={{ color: TEAL.bg, fontSize: 20 }} />
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#1A2E28", margin: 0 }}>{algo.title}</p>
                <p style={{ fontSize: 12, color: "#7A9E98", margin: 0 }}>{algo.steps.length} steps</p>
              </div>
              <i className="ti ti-chevron-right" style={{ marginLeft: "auto", color: TEAL.mid }} />
            </div>
          </button>
        ))}
        <div style={{ background: AMBER.light, border: `1px solid ${AMBER.mid}`, borderRadius: 12, padding: "12px 14px" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: AMBER.text, margin: "0 0 4px" }}>More Algorithms via AI</p>
          <p style={{ fontSize: 12, color: AMBER.bg, margin: "0 0 10px" }}>Ask the AI assistant for step-by-step walkthroughs of any clinical scenario</p>
          <button onClick={() => setTab("chat")} style={{ background: AMBER.bg, color: "#fff", border: "none", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Open Chat →</button>
        </div>
      </div>
    );
  };

  const renderSearch = () => {
    const results = getSearchResults();
    return (
      <div style={{ padding: 16 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700, color: "#1A2E28", margin: "0 0 14px" }}>Search Guidelines</h2>
        <input style={styles.searchInput} placeholder="Search dosing, regimens, protocols…" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} autoFocus />
        {searchQuery && results.length === 0 && <p style={{ fontSize: 13, color: "#7A9E98", marginTop: 16, textAlign: "center" }}>No results found. Try the AI assistant for complex queries.</p>}
        {results.map((r, i) => (
          <div key={i} style={styles.resultCard(r.color)} onClick={() => { setTab("guidelines"); setActiveSection(r.sectionId); setExpandedSub(null); }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
              <span style={styles.chip(r.color)}>{r.sectionTitle}</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#1A2E28", margin: "6px 0 4px" }}>{r.subTitle}</p>
            <p style={{ fontSize: 12, color: "#4A6560", margin: 0, lineHeight: 1.5 }}>{r.content.slice(0, 120)}…</p>
          </div>
        ))}
        {!searchQuery && (
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: "#7A9E98", textTransform: "uppercase", letterSpacing: 1, margin: "16px 0 10px" }}>Common Searches</p>
            {["DTG dosing children", "viral load monitoring", "cryptococcal meningitis", "PEP regimen", "PMTCT HEI", "TB/HIV ART timing", "HCV treatment DAA", "PrEP CAB-LA"].map(q => (
              <button key={q} onClick={() => setSearchQuery(q)} style={{ display: "block", width: "100%", background: "#fff", border: "1px solid #E0EAE6", borderRadius: 10, padding: "10px 14px", textAlign: "left", marginBottom: 8, cursor: "pointer", fontSize: 13, color: "#2A4040" }}>{q}</button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderChat = () => (
    <div style={styles.chatContainer}>
      <div style={{ background: TEAL.bg, padding: "12px 16px", display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ width: 32, height: 32, background: "rgba(255,255,255,0.2)", borderRadius: 50, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i className="ti ti-robot" style={{ color: "#fff", fontSize: 16 }} />
        </div>
        <div>
          <p style={{ color: "#fff", fontSize: 14, fontWeight: 700, margin: 0 }}>Clinical AI Assistant</p>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, margin: 0 }}>Powered by Kenya 2026 Guidelines</p>
        </div>
      </div>
      <div style={styles.chatMessages}>
        {chatMessages.map((m, i) => (
          <div key={i} style={styles.msgBubble(m.role)}>
            <p style={{ margin: 0, whiteSpace: "pre-line" }}>{m.content}</p>
          </div>
        ))}
        {isLoading && (
          <div style={styles.msgBubble("assistant")}>
            <p style={{ margin: 0, color: "#7A9E98" }}>Consulting guidelines…</p>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div style={styles.chatInput}>
        <input style={styles.inputField} value={chatInput} onChange={e => setChatInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} placeholder="Ask about any guideline…" />
        <button style={styles.sendBtn(!chatInput.trim() || isLoading)} onClick={sendMessage} disabled={!chatInput.trim() || isLoading}>Send</button>
      </div>
    </div>
  );

  return (
    <div style={styles.app}>
      {tab === "home" && (
        <div style={styles.header}>
          <i className="ti ti-dna-2" style={{ fontSize: 22, color: "rgba(255,255,255,0.9)" }} aria-hidden="true" />
          <div>
            <p style={styles.headerTitle}>Kenya HIV/STI/VH Guidelines</p>
            <p style={styles.headerSub}>NASCOP 2026 · For Healthcare Workers</p>
          </div>
        </div>
      )}
      <div style={styles.body}>
        {tab === "home" && renderHome()}
        {tab === "guidelines" && renderGuidelines()}
        {tab === "algorithms" && renderAlgorithms()}
        {tab === "search" && renderSearch()}
        {tab === "chat" && renderChat()}
      </div>
      <nav style={styles.nav} role="navigation" aria-label="Main navigation">
        {[
          { id: "home", icon: "ti-home", label: "Home" },
          { id: "guidelines", icon: "ti-book", label: "Guidelines" },
          { id: "algorithms", icon: "ti-git-branch", label: "Algorithms" },
          { id: "search", icon: "ti-search", label: "Search" },
          { id: "chat", icon: "ti-message-circle-2", label: "AI Chat" },
        ].map(n => (
          <button key={n.id} style={styles.navBtn(tab === n.id)} onClick={() => { setTab(n.id); if (n.id !== "guidelines") setActiveSection(null); if (n.id !== "algorithms") setActiveAlgo(null); }}>
            <i className={`ti ${n.icon}`} style={{ fontSize: 20 }} aria-hidden="true" />
            {n.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
