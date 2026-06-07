import { useState } from 'react';

const topics = [
  {
    id: 'pcr',
    title: 'PCR / RCP',
    priority: 'alta',
    icon: '❤️',
    sections: {
      resumo: `A Parada Cardiorrespiratória (PCR) é a cessação súbita da atividade mecânica cardíaca efetiva, com ausência de pulso central palpável. Exige reconhecimento imediato e início de RCP de alta qualidade.`,
      apresentacao: [
        'Irresponsividade ao estímulo',
        'Ausência de respiração normal (gasping não conta)',
        'Ausência de pulso carotídeo (verificar por ≤10 segundos)',
        'Pode haver convulsão no início (crise anóxica)',
      ],
      ritmos: [
        '**Chocáveis:** FV (Fibrilação Ventricular) e TV sem pulso',
        '**Não chocáveis:** AESP (Atividade Elétrica Sem Pulso) e Assistolia',
      ],
      exames: [
        'ECG contínuo (monitor)',
        'Gasometria arterial',
        'Glicemia capilar',
        'Eletrólitos (K⁺, Mg²⁺, Ca²⁺)',
        'Ecocardiograma à beira do leito (se disponível)',
        'Capnografia (PETCO₂ — confirma IOT e qualidade RCP)',
      ],
      conduta: [
        '1. Reconhecer PCR: irresponsivo + sem pulso + sem respiração',
        '2. Chamar ajuda + acionar código',
        '3. Iniciar compressões: 100-120/min, 5-6 cm profundidade, relação 30:2',
        '4. DEA/desfibrilador assim que disponível',
        '5. Ritmo chocável → choque 200J bifásico → RCP imediata por 2min',
        '6. Acesso venoso periférico ou IO',
        '7. Adrenalina 1mg EV a cada 3-5 min (não chocável: na 1ª oportunidade; chocável: após 2º choque)',
        '8. Amiodarona 300mg EV se FV/TV refratária (2ª dose: 150mg)',
        '9. IOT sem interromper compressões',
        '10. Tratar causas reversíveis (5H e 5T)',
      ],
      h5t5: {
        '5H': [
          'Hipovolemia',
          'Hipóxia',
          'Hidrogênio (acidose)',
          'Hipo/Hipercalemia',
          'Hipotermia',
        ],
        '5T': [
          'Tensão (pneumotórax hipertensivo)',
          'Tamponamento cardíaco',
          'Tóxicos',
          'Trombose pulmonar',
          'Trombose coronariana',
        ],
      },
      diferencial: [
        'FV/TV → ritmo no monitor, tratamento com choque',
        'AESP → atividade elétrica sem pulso palpável → buscar causa (5H5T)',
        'Assistolia → linha reta → confirmar em 2 derivações → adrenalina + causa',
      ],
      checklist: [
        'Verificou responsividade?',
        'Pediu ajuda / acionou código?',
        'Checou pulso carotídeo por ≤10s?',
        'Iniciou compressões 30:2?',
        'Posicionou DEA/monitor?',
        'Analisou ritmo sem parar >10s?',
        'Chocou se chocável?',
        'Administrou adrenalina na dose e momento corretos?',
        'Realizou IOT / confirmou com capnografia?',
        'Verbalizou busca pelas 5H e 5T?',
        'Conduziu equipe com comunicação efetiva?',
      ],
    },
  },
  {
    id: 'choque_hipov',
    title: 'Choque Hipovolêmico',
    priority: 'alta',
    icon: '🩸',
    sections: {
      resumo: `Choque por redução do volume intravascular — hemorrágico (mais comum) ou não hemorrágico (perdas por vômito, diarreia, queimaduras). Leva à hipoperfusão tecidual global.`,
      apresentacao: [
        'Hipotensão (PA sistólica <90 mmHg ou queda ≥40 mmHg do basal)',
        'Taquicardia compensatória',
        'Pele fria, pálida, sudoreica (vasoconstrição periférica)',
        'Turgência jugular ausente / veias colabadas',
        'Oligúria (débito urinário <0,5 mL/kg/h)',
        'Alteração do nível de consciência (agitação → sonolência)',
      ],
      classificacao: [
        'Classe I: até 750mL (<15%) — sem alterações hemodinâmicas',
        'Classe II: 750–1500mL (15–30%) — taquicardia, ansiedade',
        'Classe III: 1500–2000mL (30–40%) — hipotensão, taquicardia, alteração consciência',
        'Classe IV: >2000mL (>40%) — instável, risco de vida imediato',
      ],
      exames: [
        'Hemograma (queda Hb/Ht — pode ser normal nas primeiras horas)',
        'Lactato sérico (marcador de hipoperfusão — alvo: <2 mmol/L)',
        'Gasometria arterial',
        'Ureia / Creatinina',
        'Coagulograma (TP, TTPA)',
        'Tipagem sanguínea + prova cruzada',
        'FAST (ultrassom abdominal) se trauma',
        'ECG (excluir SCA associada)',
      ],
      conduta: [
        '1. ABCDE — via aérea pérvia, O₂ suplementar',
        '2. 2 acessos venosos calibrosos periféricos (14–16G) ou IO',
        '3. Cristaloide aquecido: 1–2L de SF 0,9% ou Ringer Lactato em bolus rápido',
        '4. Reavaliação após bolus: FC, PA, consciência, diurese',
        '5. Se hemorrágico: controle do sangramento (compressão, torniquete, cirurgia)',
        '6. Hemocomponentes: concentrado de hemácias se Hb <7 g/dL ou instabilidade persistente',
        '7. Protocolo de transfusão maciça se necessário (CH:PFC:Plaquetas = 1:1:1)',
        '8. Vasopressores apenas se refratário à reposição (noradrenalina)',
        '9. Monitorização: PA invasiva, PVC, débito urinário',
        '10. Tratar causa base',
      ],
      diferencial: [
        'Choque distributivo (séptico, anafilático) → pele quente, vasodilatação',
        'Choque cardiogênico → turgência jugular, B3, crepitações pulmonares',
        'Choque obstrutivo → TEP, tamponamento, pneumotórax',
      ],
      checklist: [
        'Avaliou ABCDE?',
        'Obteve 2 acessos calibrosos?',
        'Colheu exames antes do bolus?',
        'Administrou bolus de cristaloide (1–2L)?',
        'Reavaliou resposta hemodinâmica?',
        'Identificou e tratou causa do sangramento?',
        'Solicitou hemocomponentes se indicado?',
        'Monitorou diurese e lactato?',
        'Verbalizou diagnóstico e classe do choque?',
      ],
    },
  },
  {
    id: 'choque_septico',
    title: 'Choque Séptico',
    priority: 'alta',
    icon: '🦠',
    sections: {
      resumo: `Síndrome de disfunção orgânica ameaçadora à vida causada por resposta desregulada do hospedeiro à infecção (Sepsis-3). Choque séptico = sepse + hipotensão refratária a volume + lactato >2 mmol/L.`,
      criterios: [
        '**Sepse:** disfunção orgânica + suspeita de infecção (SOFA ≥2 pontos)',
        '**Sepse grave (conceito antigo):** hipoperfusão ou disfunção orgânica',
        '**Choque séptico:** sepse + vasopressor para manter PAM ≥65 + lactato >2 mmol/L',
        '**qSOFA (triagem):** FR ≥22, alteração consciência, PAS ≤100 — 2 de 3 = alarme',
      ],
      apresentacao: [
        'Febre (ou hipotermia em imunossuprimidos/idosos)',
        'Taquicardia, taquipneia',
        'Hipotensão (PAM <65 mmHg)',
        'Pele quente e hiperemiada (fase hiperdinâmica) → fria (fase avançada)',
        'Alteração do estado mental',
        'Oligúria',
        'Foco infeccioso identificável (pulmonar, urinário, abdominal mais comuns)',
      ],
      exames: [
        'Lactato sérico (URGENTE — alvo: clearance ≥10% em 2h)',
        'Hemoculturas (2 pares ANTES do antibiótico — não atrasar >45min)',
        'Hemograma + PCR + Procalcitonina',
        'Gasometria arterial',
        'Função renal, hepática, coagulograma',
        'Ureia, creatinina, bilirrubinas',
        'Urocultura, cultura de secreções conforme foco',
        'RX tórax / TC conforme foco suspeito',
        'Ecocardiograma (avaliar função cardíaca e volemia)',
      ],
      conduta: [
        '**Bundle da 1ª hora (Surviving Sepsis Campaign):**',
        '1. Lactato — coletar imediatamente',
        '2. Hemoculturas — 2 pares ANTES do ATB',
        '3. ATB de amplo espectro — iniciar em até 1 hora',
        '4. Cristaloide — 30 mL/kg em 3h se hipotensão ou lactato >4',
        '5. Vasopressor — noradrenalina se PAM <65 após ressuscitação',
        '---',
        'Monitorizar: PAM ≥65, diurese ≥0,5 mL/kg/h, lactato, ScvO₂',
        'Controle do foco: drenagem, desbridamento, remoção de cateter infectado',
        'Corticoide: hidrocortisona 200mg/dia se choque refratário',
        'Glicemia: alvo 140–180 mg/dL',
        'Proteção pulmonar se VM: VC 6 mL/kg peso predito',
      ],
      atb: [
        'Pulmonar (CAP): beta-lactâmico + macrolídeo ou quinolona respiratória',
        'Pulmonar (HAP/VAP): piperacilina-tazobactam ou carbapenem + aminoglicosídeo',
        'Urinário: ceftriaxona ou fluoroquinolona (ajustar por cultura)',
        'Abdominal: piperacilina-tazobactam ou carbapenem + metronidazol',
        'Sem foco definido: cobertura ampla (carbapenem)',
      ],
      diferencial: [
        'Choque hipovolêmico → sem sinais de infecção, perdas evidentes',
        'Choque cardiogênico → B3, congestão pulmonar, FEVE baixa',
        'Anafilaxia → exposição a alérgeno, urticária, broncoespasmo',
        'SRIS não infecciosa → trauma, pancreatite, queimadura',
      ],
      checklist: [
        'Colheu lactato imediatamente?',
        'Colheu 2 pares de hemocultura antes do ATB?',
        'Iniciou ATB em <1 hora?',
        'Administrou 30 mL/kg cristaloide?',
        'Iniciou noradrenalina se PAM <65 após volume?',
        'Identificou e controlou foco infeccioso?',
        'Reavaliou lactato em 2 horas?',
        'Monitorou diurese horária?',
        'Verbalizou critérios de choque séptico (Sepsis-3)?',
      ],
    },
  },
  {
    id: 'iot',
    title: 'Intubação Orotraqueal (IOT)',
    priority: 'alta',
    icon: '🫁',
    sections: {
      resumo: `Procedimento de estabelecimento de via aérea definitiva por introdução de tubo endotraqueal entre as cordas vocais. Indicada quando o paciente não consegue proteger ou manter a via aérea, ou necessita de ventilação mecânica.`,
      indicacoes: [
        'Insuficiência respiratória aguda refratária (hipóxia ou hipercapnia)',
        'Glasgow ≤8 / Incapacidade de proteger via aérea',
        'Obstrução da via aérea (real ou iminente)',
        'PCR',
        'Choque refratário com fadiga respiratória',
        'Procedimento cirúrgico emergencial',
      ],
      sequencia_isr: [
        '**0 – Preparação:** Material (tubo, fio-guia, laringoscópio, Ambu, aspirador, capnógrafo), checagem, equipe posicionada',
        '**1 – Pré-oxigenação:** O₂ 100% por 3–5 min (VNI ou máscara com reservatório) — alvo SpO₂ ≥95%',
        '**2 – Pré-medicação (opcional):** Lidocaína 1,5 mg/kg EV (PIC elevada); Atropina 0,01 mg/kg (crianças <1 ano)',
        '**3 – Sedação:** Ketamina 1–2 mg/kg EV (1ª escolha em instável) ou Etomidato 0,3 mg/kg (hemodinâmica estável) ou Midazolam 0,1–0,3 mg/kg',
        '**4 – Bloqueio neuromuscular:** Succinilcolina 1,5 mg/kg (contraindicada: hipercalemia, queimado >24h, lesão medular >24h) ou Rocurônio 1,2 mg/kg',
        '**5 – Pressão cricoide (Sellick):** Aplicar ao induzir (controverso — não obrigatório)',
        '**6 – Laringoscopia e intubação:** Posição olfativa (ear-to-sternal notch), visualizar cordas vocais, introduzir tubo (H: 8,0–8,5; M: 7,0–7,5), balonete a 20–25 cmH₂O',
        '**7 – Confirmação:** Capnografia (padrão ouro), ausculta (epigástrio → bases → ápices), condensação no tubo, RX tórax',
        '**8 – Fixação e ventilação:** Fixar tubo, conectar VM, programar parâmetros iniciais',
      ],
      exames: [
        'SpO₂ contínua',
        'Capnografia (ETCO₂ — confirma posição e perfusão)',
        'Gasometria arterial pós-intubação',
        'RX tórax pós-intubação (posição do tubo: 2–4 cm acima da carina)',
      ],
      vm_parametros: [
        'Modo: Volume Controlado (VC) inicial',
        'VC: 6–8 mL/kg (peso predito) — proteção pulmonar',
        'FR: 12–16 irpm',
        'PEEP: 5 cmH₂O inicial',
        'FiO₂: 100% → titular para SpO₂ 94–98%',
      ],
      complicacoes: [
        'Intubação esofágica (mais grave — detectada por capnografia)',
        'Intubação seletiva (tubo no brônquio direito)',
        'Trauma de via aérea, sangramento',
        'Hipotensão pós-intubação (perda do drive simpático)',
        'Broncoespasmo',
      ],
      checklist: [
        'Verificou indicação de IOT?',
        'Preparou e checou todo o material?',
        'Realizou pré-oxigenação adequada?',
        'Escolheu droga de sedação corretamente?',
        'Usou bloqueador neuromuscular?',
        'Visualizou as cordas vocais antes de inserir o tubo?',
        'Confirmou posição com capnografia?',
        'Ausculta em 5 pontos (epigástrio + 4 campos pulmonares)?',
        'Fixou o tubo?',
        'Programou o ventilador com parâmetros protetores?',
        'Solicitou RX tórax?',
      ],
    },
  },
  {
    id: 'infarto_vd',
    title: 'Infarto de VD / SCA',
    priority: 'alta',
    icon: '💔',
    sections: {
      resumo: `Infarto do Ventrículo Direito ocorre em ~30–50% dos IAM inferiores (oclusão da CD proximal). É uma emergência específica pois o tratamento é oposto ao IAM esquerdo — o VD depende de pré-carga.`,
      apresentacao_sca: [
        'Dor precordial em aperto/queimação/pressão, com irradiação para braço esq, mandíbula ou dorso',
        'Dispneia, diaforese, náusea, vômito',
        'Ansiedade, sensação de morte iminente',
        'Pode ser silencioso (diabéticos, idosos, mulheres)',
      ],
      apresentacao_vd: [
        '**Tríade de Bezold-Jarisch:** Hipotensão + Bradicardia + Ausência de congestão pulmonar',
        'Turgência jugular elevada (sinal de Kussmaul)',
        'Pulsos periféricos diminuídos',
        'Pulmões LIMPOS ao auscultar (diferencial importante com IAM esquerdo)',
        'Hipotensão grave ao usar nitratos ou diuréticos',
      ],
      ecg: [
        'IAM inferior: supra de ST em DII, DIII, aVF',
        '**Infarto de VD: supra ≥1mm em V3R e V4R** (derivações direitas — solicitação obrigatória)',
        'Bloqueio AV frequente (bradicardia + BAV)',
        'DII, DIII, aVF: supra → oclusão da CD',
        'Reciprocidade: infra em DI e aVL',
      ],
      exames: [
        'ECG 12 derivações + derivações direitas (V3R, V4R, V5R, V6R) — OBRIGATÓRIO',
        'Troponina I ou T (elevar em 3–6h; pico em 12–24h)',
        'CK-MB (marcador de reperfusão — pico precoce)',
        'BNP / NT-proBNP',
        'Hemograma, coagulograma, função renal',
        'RX tórax',
        'Ecocardiograma (função VD, motilidade, derrame)',
        'Cateterismo (angioplastia primária — padrão ouro <90 min porta-balão)',
      ],
      conduta_sca: [
        '**MONAB (SCA STEMI):**',
        'M — Morfina 2–4mg EV (dor refratária — usar com cautela, pode piorar prognóstico)',
        'O — O₂ se SpO₂ <90%',
        'N — Nitrato SL (CONTRAINDICADO no infarto de VD!)',
        'A — AAS 200–300mg VO (dose de ataque)',
        'B — Beta-bloqueador (cuidado em bradicardia/BAS)',
        '---',
        'Antiagregação dupla: AAS + Ticagrelor 180mg ou Clopidogrel 300–600mg',
        'Anticoagulação: Heparina não fracionada ou Enoxaparina',
        'Reperfusão: ICP primária <90 min (padrão) ou trombólise <30 min se ICP indisponível',
      ],
      conduta_vd: [
        '⚠️ CONTRAINDICADOS no infarto de VD:',
        '— Nitratos (reduzem pré-carga → colapso hemodinâmico)',
        '— Diuréticos',
        '— Morfina em doses altas',
        '---',
        '✅ TRATAMENTO DO INFARTO DE VD:',
        '1. Reposição volêmica vigorosa: SF 0,9% 500mL–1L (VD precisa de pré-carga)',
        '2. Manter FC: tratar bradicardia com atropina; marcapasso se BAV avançado',
        '3. Manter ritmo sinusal: cardioversão se FA (VD depende do kick atrial)',
        '4. Vasopressor se refratário: dobutamina ou noradrenalina',
        '5. Reperfusão precoce: ICP primária é o tratamento definitivo',
      ],
      diferencial: [
        'TEP → D-dímero, angiotomografia, ausência de alteração coronariana',
        'Dissecção de aorta → dor em caráter de rasgamento, pulsos assimétricos, alargamento do mediastino',
        'Pericardite → dor pleurítica, melhora ao sentar, atrito pericárdico, supra difuso côncavo',
        'Miopericardite → jovem, quadro viral antecedente, troponina elevada, ECG difuso',
      ],
      checklist: [
        'Solicitou ECG em <10 minutos da chegada?',
        'Reconheceu supra em DII, DIII, aVF?',
        'Solicitou derivações direitas (V3R, V4R)?',
        'Identificou tríade de Bezold-Jarisch?',
        'EVITOU nitratos e diuréticos no IAM de VD?',
        'Administrou AAS?',
        'Indicou antiagregação dupla?',
        'Anticoagulou o paciente?',
        'Ativou protocolo de reperfusão (ICP <90 min)?',
        'Tratou bradicardia / BAV se presente?',
      ],
    },
  },
  {
    id: 'politrauma',
    title: 'Politrauma / ABCDE',
    priority: 'alta',
    icon: '🚑',
    sections: {
      resumo: `Avaliação sistematizada do paciente traumatizado segundo o protocolo ATLS. O objetivo é identificar e tratar as ameaças à vida por ordem de prioridade, não por aparência da lesão.`,
      abcde: [
        '**A — Airway (via aérea) com proteção da coluna cervical:**\nFalar com o paciente → resposta = via aérea pérvia\nSe obstruída: manobra jaw-thrust, aspiração, cânula orofaríngea, IOT ou via aérea cirúrgica\nColar cervical / imobilização cervical manual',
        "**B — Breathing (respiração e ventilação):**\nExposição do tórax, inspeção, ausculta, percussão\nPneumotórax hipertensivo → ausência de MV + hipertimpanismo + desvio de traqueia → descompressão com agulha (2º EIC LMC) imediata\nHemotórax maciço → drenagem em selo d'água\nTórax instável → ventilação com pressão positiva\nO₂ 100%",
        '**C — Circulation (circulação com controle de hemorragia):**\nControle de sangramento externo (compressão, torniquete)\nIdentificar choque hemorrágico\n2 acessos venosos calibrosos ou IO\n1–2L cristaloide aquecido, hemocomponentes\nFAST (ultrassom) para sangramento oculto',
        '**D — Disability (avaliação neurológica):**\nEscala de Glasgow (E+V+M)\nPupila: tamanho, simetria, reflexo fotomotor\nGlicemia capilar\nDeficit motor focal',
        '**E — Exposure (exposição com prevenção de hipotermia):**\nDespes completamente o paciente\nInspecionar dorso (rolar em bloco)\nCobrir com manta térmica após exame',
      ],
      exames: [
        'FAST (foco abdominal, pericárdico, pleural)',
        'RX tórax, RX bacia (trauma abdominal/pélvico)',
        "TC de corpo inteiro (trauma grave — 'pan-scan')",
        'Hemograma, coagulograma, tipagem',
        'Lactato (gravidade e monitorização)',
        'Gasometria',
        'Beta-hCG (mulher em idade fértil)',
      ],
      lesoes_missed: [
        'Pneumotórax hipertensivo',
        'Hemotórax maciço',
        'Tamponamento cardíaco (Tríade de Beck: hipotensão + turgência jugular + bulhas abafadas)',
        'Lesão de grande vaso (aorta)',
        'Lesão medular cervical',
      ],
      checklist: [
        'Imobilizou coluna cervical no primeiro contato?',
        'Avaliou e garantiu via aérea pérvia?',
        'Inspecionou o tórax completamente (B)?',
        'Identificou pneumotórax hipertensivo se presente?',
        'Controlou sangramento externo?',
        'Obteve 2 acessos venosos calibrosos?',
        'Realizou FAST?',
        'Avaliou Glasgow e pupilas?',
        'Despiu e inspecionou o dorso?',
        'Preveniu hipotermia?',
      ],
    },
  },
  {
    id: 'anafilaxia',
    title: 'Anafilaxia',
    priority: 'media',
    icon: '⚠️',
    sections: {
      resumo: `Reação alérgica sistêmica grave e potencialmente fatal, mediada por IgE. Exige reconhecimento imediato e adrenalina intramuscular como tratamento de 1ª linha.`,
      apresentacao: [
        'Início rápido (minutos após exposição ao alérgeno)',
        'Cutânea: urticária, angioedema, prurido, rubor',
        'Respiratória: broncoespasmo, estridor, dispneia, hipóxia',
        'Cardiovascular: hipotensão, taquicardia, colapso',
        'Gastrointestinal: náusea, vômito, dor abdominal, diarreia',
        'Neurológica: alteração do nível de consciência',
      ],
      criterios: [
        '**Critério 1:** Envolvimento cutâneo/mucoso + comprometimento respiratório OU hipotensão',
        '**Critério 2:** 2 ou mais sistemas após exposição a alérgeno conhecido',
        '**Critério 3:** Hipotensão isolada após exposição a alérgeno conhecido',
      ],
      exames: [
        'Diagnóstico clínico — não atrasar tratamento para exames',
        'Triptase sérica (colher em <30 min, 2h e 24h após — confirma diagnóstico retrospectivo)',
        'SpO₂ contínua',
        'ECG (isquemia associada — síndrome de Kounis)',
      ],
      conduta: [
        '1. ⚠️ ADRENALINA 1:1000 — 0,3–0,5mg IM (face anterolateral da coxa) — 1ª LINHA',
        '2. Pode repetir a cada 5–15 minutos',
        '3. Posição: deitado com MMII elevados (evitar posição sentada)',
        '4. O₂ suplementar (alvo SpO₂ ≥94%)',
        '5. Acesso venoso + SF 0,9% em bolus (hipotensão)',
        '6. Anti-histamínico: difenidramina 25–50mg IM/EV (2ª linha — não substitui adrenalina)',
        '7. Corticoide: metilprednisolona 1–2 mg/kg EV (previne reação bifásica)',
        '8. Broncodilatador: salbutamol inalatório se broncoespasmo',
        '9. Glucagon 1–2mg EV se paciente em uso de beta-bloqueador',
        '10. Observação mínima 4–6h (risco de reação bifásica em até 20%)',
      ],
      diferencial: [
        'Angioedema hereditário (sem urticária, sem hipotensão, sem resposta à adrenalina)',
        'Choque séptico (febre, foco infeccioso)',
        'Asma aguda grave (sem componente sistêmico)',
        'Síncope vasovagal (bradicardia, sem urticária)',
        'Síndrome carcinoide (episódica, sem relação com alérgeno)',
      ],
      checklist: [
        'Reconheceu anafilaxia clinicamente?',
        'Administrou adrenalina IM na coxa (1ª linha)?',
        'Posicionou paciente em decúbito com MMII elevados?',
        'Ofertou O₂?',
        'Obteve acesso venoso?',
        'Administrou anti-histamínico e corticoide?',
        'Monitorou SpO₂ e PA continuamente?',
        'Indicou observação mínima de 4–6h?',
        'Orientou sobre auto-injetor de adrenalina na alta?',
      ],
    },
  },
  {
    id: 'convulsao',
    title: 'Crise Convulsiva / Estado de Mal',
    priority: 'media',
    icon: '⚡',
    sections: {
      resumo: `Estado de mal epiléptico (EME) = crise convulsiva ≥5 minutos OU 2 ou mais crises sem recuperação completa da consciência entre elas. É emergência neurológica com mortalidade significativa se não tratada.`,
      apresentacao: [
        'Crise tônico-clônica generalizada (mais comum)',
        'Desvio do olhar, automatismos motores',
        'Período pós-ictal (confusão, sonolência, déficits focais transitórios — paralisia de Todd)',
        'EME: crise persistente ou paciente não recupera consciência entre crises',
        'EME não convulsivo: rebaixamento de consciência sem movimentos óbvios (EEG diagnóstico)',
      ],
      causas: [
        'Epilepsia conhecida com má adesão ao tratamento',
        'Hipoglicemia (causa SEMPRE excluída)',
        'Hiponatremia, hipocalcemia',
        'Infecção do SNC (meningite, encefalite)',
        'AVC / tumor cerebral',
        'Intoxicação (cocaína, teofilina, isoniazida, organofosforados)',
        'Síndrome de abstinência alcoólica',
        'TCE',
        'Eclâmpsia (gestante)',
      ],
      exames: [
        'Glicemia capilar IMEDIATA (excluir hipoglicemia)',
        'Eletrólitos: Na⁺, K⁺, Ca²⁺, Mg²⁺',
        'Hemograma, função renal, hepática',
        'Dosagem de anticonvulsivantes se epiléptico conhecido',
        'TC de crânio sem contraste (causa estrutural)',
        'Punção lombar (se suspeita de infecção — após TC)',
        'EEG (EME não convulsivo, monitorização pós-crise)',
        'Toxicológico se suspeita',
        'Beta-hCG (mulher em idade fértil — eclâmpsia)',
      ],
      conduta: [
        '**1ª fase (0–5 min) — estabilização:**',
        'Posição lateral de segurança',
        'Via aérea pérvia, O₂, acesso venoso',
        'Glicemia capilar → hipoglicemia: glicose 50% 50mL EV',
        '---',
        '**2ª fase (5–20 min) — 1ª linha:**',
        'Benzodiazepínico: Diazepam 10mg EV (0,15 mg/kg) ou Midazolam 10mg IM',
        'Pode repetir 1x após 5 minutos',
        '---',
        '**3ª fase (20–40 min) — 2ª linha:**',
        'Fenitoína 20 mg/kg EV (diluída, máx 50 mg/min) OU',
        'Valproato de sódio 40 mg/kg EV OU',
        'Levetiracetam 60 mg/kg EV',
        '---',
        '**4ª fase (>40 min) — EME refratário:**',
        'UTI + Intubação + Anestesia geral: propofol, midazolam, barbitúrico',
        'Monitorização por EEG contínuo',
      ],
      diferencial: [
        'Síncope com movimentos clônicos (curta, sem pós-ictal prolongado)',
        'Crise psicogênica (movimentos assimétricos, olhos fechados resistentes à abertura)',
        'Hipoglicemia grave',
        'AVC (sem caráter ictal)',
        'Intoxicação',
      ],
      checklist: [
        'Posicionou em decúbito lateral?',
        'Garantiu via aérea e O₂?',
        'Colheu glicemia capilar?',
        'Tratou hipoglicemia se presente?',
        'Administrou benzodiazepínico na dose correta?',
        'Esperou 5 minutos antes de repetir?',
        'Passou para 2ª linha após falha do BZD?',
        'Indicou UTI se EME refratário?',
        'Investigou causa da crise?',
      ],
    },
  },
  {
    id: 'ave',
    title: 'AVC — Reconhecimento e Conduta',
    priority: 'media',
    icon: '🧠',
    sections: {
      resumo: `AVC isquêmico responde por ~85% dos casos. A janela terapêutica para trombólise é de 4,5 horas do início dos sintomas. Tempo = neurônio: cada minuto sem tratamento = 1,9 milhões de neurônios perdidos.`,
      sinal_face: [
        '**SAMU/FAST:**',
        'F — Face (assimetria facial, desvio de rima)',
        'A — Arms (fraqueza/queda de um braço)',
        'S — Speech (alteração da fala — disartria, afasia)',
        'T — Time (tempo = ligar 192 imediatamente)',
      ],
      apresentacao: [
        'Déficit neurológico focal de início súbito',
        'Hemiparesia ou hemiplegia',
        'Afasia, disartria',
        'Hemianopsia, diplopia, desvio do olhar conjugado',
        'Ataxia, vertigem (sistema vertebrobasilar)',
        "Cefaleia súbita intensa 'pior da vida' → pensar em HSA (AVC hemorrágico)",
        'AIT: sintomas transitórios que resolvem em <24h (risco alto de AVC completo em 48h)',
      ],
      exames: [
        'TC de crânio SEM contraste IMEDIATA (excluir sangramento — AVC hemorrágico é contraindicação absoluta à trombólise)',
        'RM crânio com DWI (mais sensível para isquemia aguda)',
        'Glicemia capilar (hipo/hiperglicemia mimetizam AVC)',
        'Hemograma, coagulograma, função renal',
        'ECG (FA — cardioembólico?)',
        'Ecocardiograma (pesquisa de êmbolo)',
        'Doppler de carótidas',
        'Angiotomografia (candidato a trombectomia)',
      ],
      conduta: [
        '**Ativação do Código AVC → porta-TC <25 min, porta-agulha <60 min**',
        '---',
        '**AVC isquêmico — trombólise (rt-PA alteplase 0,9 mg/kg, máx 90mg):**',
        'Indicada se: sintomas <4,5h + TC sem sangramento + sem contraindicações',
        '10% dose em bolus EV + 90% em 60 minutos',
        '---',
        '**Contraindicações à trombólise:**',
        'Sintomas >4,5h ou horário incerto',
        'TC com sangramento ou tumor',
        'PA >185/110 refratária',
        'Plaquetas <100.000, INR >1,7',
        'Cirurgia/TCE recente (<3 meses)',
        '---',
        '**Medidas gerais:**',
        'Cabeceira 0–30° (isquêmico) / 30° (hemorrágico)',
        'O₂ se SpO₂ <94%',
        'PA: NÃO tratar se <220/120 (isquêmico sem trombólise) — hipotensão piora isquemia',
        'Glicemia alvo: 140–180 mg/dL',
        'Antiplaquetário: AAS 300mg VO (se não fez trombólise)',
        'Trombectomia mecânica: oclusão de grande vaso, <24h, centro especializado',
      ],
      diferencial: [
        'Hipoglicemia (SEMPRE excluir primeiro — reversível)',
        'Crise focal pós-ictal (paralisia de Todd)',
        'Enxaqueca hemiplégica',
        'Tumor cerebral (evolução subaguda)',
        'Encefalite / abscesso',
        'Síncope / lipotímia',
      ],
      checklist: [
        'Reconheceu déficit focal de início súbito?',
        'Anotou horário exato do início dos sintomas?',
        'Ativou Código AVC?',
        'Solicitou TC de crânio sem contraste imediatamente?',
        'Checou glicemia?',
        'Avaliou critérios para trombólise?',
        'Calculou dose do rt-PA (0,9 mg/kg)?',
        'Monitorou PA durante e após trombólise?',
        'Posicionou cabeceira corretamente?',
        'Discutiu trombectomia mecânica se elegível?',
      ],
    },
  },
  {
    id: 'cad',
    title: 'Cetoacidose Diabética (CAD)',
    priority: 'baixa',
    icon: '🍬',
    sections: {
      resumo: `Complicação aguda do DM1 (e DM2 em situações de estresse). Tríade: hiperglicemia + acidose metabólica + cetonemia/cetonúria.`,
      criterios: [
        'Glicemia >250 mg/dL',
        'pH <7,3 ou bicarbonato <18 mEq/L',
        'Cetonas positivas no sangue ou urina',
        '**Grave:** pH <7,1, HCO₃ <10, alteração de consciência',
      ],
      apresentacao: [
        'Poliúria, polidipsia',
        'Náusea, vômito, dor abdominal (pseudoabdome agudo)',
        'Respiração de Kussmaul (profunda e rápida — compensação da acidose)',
        'Hálito cetônico (frutas, acetona)',
        'Desidratação (perda de 3–6L)',
        'Alteração da consciência (nos casos graves)',
      ],
      exames: [
        'Glicemia capilar + sérica',
        'Gasometria venosa (pH, HCO₃) — arterial se grave',
        'Eletrólitos: Na⁺, K⁺ (CRÍTICO), Cl⁻, Mg²⁺, fosfato',
        'Cetonemia (beta-hidroxibutirato) ou cetonúria',
        'Hemograma (leucocitose reativa — não indica infecção obrigatoriamente)',
        'Ureia, creatinina (desidratação + IRA pré-renal)',
        'Amilase, lipase se dor abdominal',
        'ECG (alterações do K⁺)',
        'Culturas se suspeita de infecção como fator precipitante',
        'Osmolaridade sérica calculada',
      ],
      conduta: [
        '**1. Hidratação:**',
        'SF 0,9% 1L na 1ª hora → depois conforme débito urinário e eletrólitos',
        'Quando glicemia <200–250: mudar para SG 5% + SF 0,45%',
        '---',
        '**2. Insulinoterapia:**',
        'Insulina regular EV: 0,1 U/kg/h (sem bolus inicial)',
        'Alvo: queda de glicemia 50–75 mg/dL/hora',
        'NÃO iniciar insulina se K⁺ <3,5 mEq/L → repor K⁺ primeiro!',
        '---',
        '**3. Reposição de Potássio (CRÍTICO):**',
        'K⁺ <3,5: repor antes da insulina',
        'K⁺ 3,5–5,5: repor junto com insulina',
        'K⁺ >5,5: não repor, monitorizar',
        '---',
        '**4. Bicarbonato:**',
        'Apenas se pH <6,9 (raramente necessário)',
        '---',
        '**5. Tratar fator precipitante:**',
        'Infecção (mais comum), não adesão à insulina, estresse, cirurgia',
        '---',
        '**Critérios de resolução da CAD:**',
        'Glicemia <200 + pH >7,3 + HCO₃ >18 + anion gap normalizado',
      ],
      diferencial: [
        'Estado Hiperosmolar Hiperglicêmico (EHH): glicemia >600, osmolaridade >320, SEM acidose importante',
        'Acidose lática',
        'Acidose por intoxicação (metanol, etilenoglicol)',
        'Pseudo-abdome agudo (excluir causa cirúrgica)',
      ],
      checklist: [
        'Fez gasometria e eletrólitos imediatamente?',
        'Checou K⁺ antes de iniciar insulina?',
        'Iniciou hidratação com SF 0,9%?',
        'Iniciou insulina regular EV na dose correta?',
        'Repôs K⁺ conforme nível sérico?',
        'Monitorou glicemia horária?',
        'Identificou e tratou fator precipitante?',
        'Avaliou critérios de resolução da CAD?',
      ],
    },
  },
];

const priorityConfig = {
  alta: {
    label: 'Alta probabilidade',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.15)',
  },
  media: {
    label: 'Média probabilidade',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.15)',
  },
  baixa: {
    label: 'Menor probabilidade',
    color: '#6366f1',
    bg: 'rgba(99,102,241,0.15)',
  },
};

const sectionLabels = {
  resumo: 'Resumo',
  apresentacao: 'Apresentação Clínica',
  apresentacao_sca: 'Apresentação SCA',
  apresentacao_vd: 'IAM de VD — Sinais Específicos',
  criterios: 'Critérios Diagnósticos',
  criterios_diagnosticos: 'Critérios Diagnósticos',
  classificacao: 'Classificação',
  sinal_face: 'Reconhecimento (FAST)',
  abcde: 'Protocolo ABCDE',
  ecg: 'Achados no ECG',
  exames: 'Exames Complementares',
  conduta: 'Conduta',
  conduta_sca: 'Conduta — SCA/STEMI',
  conduta_vd: 'Conduta — IAM VD (⚠️ específica)',
  sequencia_isr: 'Sequência ISR (passo a passo)',
  vm_parametros: 'Parâmetros Iniciais do Ventilador',
  h5t5: 'Causas Reversíveis (5H e 5T)',
  indicacoes: 'Indicações',
  atb: 'Antibioticoterapia por Foco',
  causas: 'Causas / Fatores Precipitantes',
  ritmos: 'Ritmos de PCR',
  complicacoes: 'Complicações',
  lesoes_missed: 'Lesões Ameaçadoras à Vida',
  diferencial: 'Diagnóstico Diferencial',
  checklist: '✅ Checklist OSCE',
};

export default function OSCEApp() {
  const [selected, setSelected] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [checklistState, setChecklistState] = useState({});
  const [view, setView] = useState('grid');

  const topic = topics.find((t) => t.id === selected);

  const toggleCheck = (topicId, idx) => {
    const key = `${topicId}-${idx}`;
    setChecklistState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetChecklist = (topicId) => {
    const keys = Object.keys(checklistState).filter((k) =>
      k.startsWith(topicId)
    );
    const update = {};
    keys.forEach((k) => (update[k] = false));
    setChecklistState((prev) => ({ ...prev, ...update }));
  };

  const getProgress = (topicId, items) => {
    const checked = items.filter(
      (_, i) => checklistState[`${topicId}-${i}`]
    ).length;
    return {
      checked,
      total: items.length,
      pct: Math.round((checked / items.length) * 100),
    };
  };

  if (selected && topic) {
    const sections = Object.entries(topic.sections);
    const checklist = topic.sections.checklist;
    const progress = checklist ? getProgress(topic.id, checklist) : null;

    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0a0e1a',
          color: '#e8eaf0',
          fontFamily: "'Georgia', serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: 'linear-gradient(135deg, #0d1321 0%, #1a2035 100%)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '16px 20px',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <button
            onClick={() => {
              setSelected(null);
              setActiveSection(null);
            }}
            style={{
              background: 'rgba(255,255,255,0.07)',
              border: 'none',
              borderRadius: 8,
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '8px 14px',
              fontSize: 13,
              fontFamily: 'inherit',
              transition: 'all 0.2s',
            }}
          >
            ← Voltar
          </button>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11,
                color: '#64748b',
                letterSpacing: 2,
                textTransform: 'uppercase',
                marginBottom: 2,
              }}
            >
              OSCE U&E
            </div>
            <div style={{ fontSize: 17, fontWeight: 'bold', color: '#f1f5f9' }}>
              {topic.icon} {topic.title}
            </div>
          </div>
          <div
            style={{
              background: priorityConfig[topic.priority].bg,
              border: `1px solid ${priorityConfig[topic.priority].color}40`,
              color: priorityConfig[topic.priority].color,
              borderRadius: 20,
              padding: '4px 12px',
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            {priorityConfig[topic.priority].label}
          </div>
        </div>

        {/* Section tabs */}
        <div
          style={{
            display: 'flex',
            gap: 6,
            padding: '12px 16px',
            overflowX: 'auto',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            scrollbarWidth: 'none',
          }}
        >
          <button
            onClick={() => setActiveSection(null)}
            style={{
              background:
                activeSection === null ? '#2563eb' : 'rgba(255,255,255,0.05)',
              border: 'none',
              borderRadius: 20,
              color: activeSection === null ? '#fff' : '#94a3b8',
              cursor: 'pointer',
              padding: '6px 14px',
              fontSize: 12,
              whiteSpace: 'nowrap',
              fontFamily: 'inherit',
            }}
          >
            Tudo
          </button>
          {sections.map(([key]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              style={{
                background:
                  activeSection === key ? '#2563eb' : 'rgba(255,255,255,0.05)',
                border: 'none',
                borderRadius: 20,
                color: activeSection === key ? '#fff' : '#94a3b8',
                cursor: 'pointer',
                padding: '6px 14px',
                fontSize: 12,
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
            >
              {sectionLabels[key] || key}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px 16px', maxWidth: 800, margin: '0 auto' }}>
          {sections
            .filter(([key]) => activeSection === null || activeSection === key)
            .map(([key, value]) => (
              <div
                key={key}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '20px',
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: '#60a5fa',
                    marginBottom: 14,
                    fontFamily: "'Georgia', serif",
                  }}
                >
                  {sectionLabels[key] || key}
                </div>

                {key === 'checklist' ? (
                  <div>
                    {progress && (
                      <div style={{ marginBottom: 14 }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginBottom: 6,
                          }}
                        >
                          <span style={{ fontSize: 12, color: '#94a3b8' }}>
                            {progress.checked}/{progress.total} itens
                          </span>
                          <span
                            style={{
                              fontSize: 12,
                              color:
                                progress.pct === 100 ? '#22c55e' : '#60a5fa',
                            }}
                          >
                            {progress.pct}%
                          </span>
                        </div>
                        <div
                          style={{
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: 4,
                            height: 6,
                          }}
                        >
                          <div
                            style={{
                              width: `${progress.pct}%`,
                              height: '100%',
                              borderRadius: 4,
                              background:
                                progress.pct === 100 ? '#22c55e' : '#3b82f6',
                              transition: 'width 0.3s',
                            }}
                          />
                        </div>
                      </div>
                    )}
                    {value.map((item, i) => {
                      const checked = checklistState[`${topic.id}-${i}`];
                      return (
                        <div
                          key={i}
                          onClick={() => toggleCheck(topic.id, i)}
                          style={{
                            display: 'flex',
                            gap: 12,
                            alignItems: 'flex-start',
                            padding: '10px 12px',
                            borderRadius: 8,
                            marginBottom: 6,
                            cursor: 'pointer',
                            background: checked
                              ? 'rgba(34,197,94,0.1)'
                              : 'rgba(255,255,255,0.03)',
                            border: `1px solid ${
                              checked
                                ? 'rgba(34,197,94,0.3)'
                                : 'rgba(255,255,255,0.06)'
                            }`,
                            transition: 'all 0.2s',
                          }}
                        >
                          <div
                            style={{
                              width: 20,
                              height: 20,
                              borderRadius: 6,
                              flexShrink: 0,
                              background: checked ? '#22c55e' : 'transparent',
                              border: `2px solid ${
                                checked ? '#22c55e' : '#475569'
                              }`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.2s',
                            }}
                          >
                            {checked && (
                              <span style={{ color: '#fff', fontSize: 12 }}>
                                ✓
                              </span>
                            )}
                          </div>
                          <span
                            style={{
                              fontSize: 14,
                              color: checked ? '#86efac' : '#cbd5e1',
                              textDecoration: checked ? 'line-through' : 'none',
                              lineHeight: 1.5,
                              transition: 'all 0.2s',
                            }}
                          >
                            {item}
                          </span>
                        </div>
                      );
                    })}
                    <button
                      onClick={() => resetChecklist(topic.id)}
                      style={{
                        marginTop: 8,
                        background: 'transparent',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: 8,
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '6px 14px',
                        fontSize: 12,
                        fontFamily: 'inherit',
                      }}
                    >
                      Resetar checklist
                    </button>
                  </div>
                ) : key === 'h5t5' ? (
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 12,
                    }}
                  >
                    {Object.entries(value).map(([label, items]) => (
                      <div
                        key={label}
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          borderRadius: 10,
                          padding: 14,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 700,
                            color: '#f59e0b',
                            marginBottom: 8,
                          }}
                        >
                          {label}
                        </div>
                        {items.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              fontSize: 13,
                              color: '#cbd5e1',
                              padding: '3px 0',
                              borderBottom: '1px solid rgba(255,255,255,0.05)',
                            }}
                          >
                            • {item}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : key === 'resumo' ? (
                  <p
                    style={{
                      fontSize: 15,
                      color: '#cbd5e1',
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {value}
                  </p>
                ) : Array.isArray(value) ? (
                  <div>
                    {value.map((item, i) => {
                      const isBold =
                        item.startsWith('**') ||
                        item.startsWith('⚠️') ||
                        item.startsWith('✅') ||
                        item.startsWith('---');
                      const isDivider = item === '---';
                      if (isDivider)
                        return (
                          <div
                            key={i}
                            style={{
                              height: 1,
                              background: 'rgba(255,255,255,0.08)',
                              margin: '12px 0',
                            }}
                          />
                        );
                      const cleanItem = item.replace(/\*\*/g, '');
                      return (
                        <div
                          key={i}
                          style={{
                            padding: '8px 12px',
                            marginBottom: 4,
                            borderRadius: 8,
                            background: isBold
                              ? 'rgba(96,165,250,0.07)'
                              : 'transparent',
                            borderLeft: isBold
                              ? '3px solid #3b82f6'
                              : '3px solid transparent',
                            fontSize: isBold ? 13 : 14,
                            fontWeight: isBold ? 600 : 400,
                            color: isBold ? '#93c5fd' : '#cbd5e1',
                            lineHeight: 1.6,
                          }}
                        >
                          {cleanItem}
                        </div>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0e1a',
        color: '#e8eaf0',
        fontFamily: "'Georgia', serif",
      }}
    >
      {/* Hero */}
      <div
        style={{
          background:
            'linear-gradient(160deg, #0d1321 0%, #0f1e3d 50%, #0a0e1a 100%)',
          padding: '40px 20px 32px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 4,
            color: '#3b82f6',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          6º Ano · Urgência & Emergência
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            margin: '0 0 8px',
            color: '#f1f5f9',
            lineHeight: 1.2,
          }}
        >
          Guia OSCE
        </h1>
        <p style={{ fontSize: 14, color: '#64748b', margin: '0 0 24px' }}>
          {topics.length} temas · Checklists interativos · Diagnóstico
          diferencial
        </p>
        <div
          style={{
            display: 'flex',
            gap: 8,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {Object.entries(priorityConfig).map(([key, cfg]) => (
            <div
              key={key}
              style={{
                background: cfg.bg,
                border: `1px solid ${cfg.color}30`,
                borderRadius: 20,
                padding: '4px 14px',
                fontSize: 12,
                color: cfg.color,
              }}
            >
              {cfg.label}
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div style={{ padding: '24px 16px', maxWidth: 900, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 14,
          }}
        >
          {topics.map((t) => {
            const cfg = priorityConfig[t.priority];
            const checklist = t.sections.checklist;
            const progress = checklist ? getProgress(t.id, checklist) : null;
            return (
              <div
                key={t.id}
                onClick={() => setSelected(t.id)}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.07)`,
                  borderRadius: 16,
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = cfg.color + '50';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${cfg.color}, transparent)`,
                    borderRadius: '16px 16px 0 0',
                  }}
                />
                <div style={{ fontSize: 28, marginBottom: 10 }}>{t.icon}</div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: '#f1f5f9',
                    marginBottom: 6,
                  }}
                >
                  {t.title}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    background: cfg.bg,
                    border: `1px solid ${cfg.color}30`,
                    color: cfg.color,
                    borderRadius: 20,
                    padding: '2px 10px',
                    fontSize: 11,
                    marginBottom: 12,
                  }}
                >
                  {cfg.label}
                </div>
                {progress && (
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ fontSize: 11, color: '#475569' }}>
                        Checklist
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          color: progress.pct > 0 ? '#60a5fa' : '#475569',
                        }}
                      >
                        {progress.checked}/{progress.total}
                      </span>
                    </div>
                    <div
                      style={{
                        background: 'rgba(255,255,255,0.07)',
                        borderRadius: 3,
                        height: 4,
                      }}
                    >
                      <div
                        style={{
                          width: `${progress.pct}%`,
                          height: '100%',
                          borderRadius: 3,
                          background:
                            progress.pct === 100 ? '#22c55e' : '#3b82f6',
                          transition: 'width 0.3s',
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
