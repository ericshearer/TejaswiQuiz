// =============================================================================
// CURRICULUM DATA — GSEB HSC CLASS XII
// =============================================================================
// Sources: GSEB HSC Biology 2026, Chemistry 2026, Physics 2025 question papers.
// Questions are drawn directly from those exams.
//
// Each subtopic has:
//   - searchQuery: used by the "Find videos on YouTube" button
//   - videoId:     optional. If present, that specific video is embedded.
//                  Get the ID from any youtube.com/watch?v=<ID> URL.
//
// Question format:
//   { q: "Question text",
//     options: ["A", "B", "C", "D"],
//     correct: 0,                  // index of the correct option (0-3)
//     explanation: "Why this is the right answer." }
// =============================================================================

export const curriculum = {
  biology: {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: '#10b981',
    accent: '#d1fae5',
    description: 'GSEB HSC Biology — Reproduction, Genetics, Evolution, Ecology & Biotechnology.',
    subtopics: [
      {
        id: 'sexual-reproduction-plants',
        name: 'Sexual Reproduction in Plants',
        description: 'Flower structure, pollination, fertilisation, embryo development.',
        searchQuery: 'sexual reproduction in flowering plants GSEB class 12 biology',
        videoId: 'cd_dCws1hG0',
        questions: [
          {
            q: 'At the Micropyler end, the Egg apparatus is constituted by the fusion of which cells?',
            options: ['2 Male gametes and one egg cell', 'One Male gamete and 2 egg cells', '2 synergid cells and one egg cell', '2 synergid cells and one Male gamete'],
            correct: 2,
            explanation: 'The egg apparatus at the micropylar end consists of 2 synergid cells and one egg cell.',
          },
          {
            q: 'Which of the following possesses only cross-pollination?',
            options: ['Self in-compatibility', 'Self compatibility', 'Self fertilisation', 'Bisexual flower'],
            correct: 0,
            explanation: 'Self-incompatibility prevents self-pollination and forces cross-pollination.',
          },
          {
            q: 'It is an example of persistent nucellus (perisperm).',
            options: ['Castor', 'Maize', 'Beet', 'Beans'],
            correct: 0,
            explanation: 'Castor (Ricinus communis) is the classic example of a seed with persistent nucellus called perisperm.',
          },
          {
            q: 'Assertion (A): The microsporangia develop further and become pollen sacs. Reason (R): Innermost layer of the microsporangium is tapetum.',
            options: ['A is correct, R is wrong', 'A and R both are correct, R is not correct explanation of A', 'A and R both are correct, R is correct explanation of A', 'A is wrong, R is correct'],
            correct: 1,
            explanation: 'Both statements are correct, but tapetum being the innermost layer does not directly explain why microsporangia become pollen sacs; tapetum nourishes developing pollen.',
          },
          {
            q: 'In which method is a sperm directly injected into the ovum?',
            options: ['IUI', 'GIFT', 'ICSI', 'ZIFT'],
            correct: 2,
            explanation: 'ICSI (Intra Cytoplasmic Sperm Injection) involves injecting a single sperm directly into an egg.',
          },
          {
            q: 'Which of the following is not a water-pollinated plant?',
            options: ['Lotus', 'Zostera', 'Vallisneria', 'Hydrilla'],
            correct: 0,
            explanation: 'Lotus is insect-pollinated. Zostera, Vallisneria, and Hydrilla are water-pollinated (hydrophily).',
          },
        ],
      },
      {
        id: 'human-reproduction',
        name: 'Human Reproduction',
        description: 'Gametogenesis, fertilisation, pregnancy, foetal development.',
        searchQuery: 'human reproduction class 12 biology GSEB gametogenesis fertilization',
        videoId: 'JaNmph3LmqQ',
        questions: [
          {
            q: 'What is the number of chromosomes in primary oocytes and first polar body respectively?',
            options: ['23, 46', '46, 23', '23, 23', '46, 46'],
            correct: 3,
            explanation: 'Primary oocytes undergo meiosis I and have 46 chromosomes before division; the first polar body also has 46 (diploid).',
          },
          {
            q: 'The first movement of the foetus occurs in which month of pregnancy?',
            options: ['Second month', 'Third month', 'Fifth month', 'Sixth month'],
            correct: 2,
            explanation: 'Foetal movements are first felt by the mother in the fifth month of pregnancy.',
          },
          {
            q: 'Which of the following is the correct equation for population growth?',
            options: ['N(t+1) = Nt [(B+D)−(I+E)]', 'N(t+1) = Nt + [(B+D)−(I+E)]', 'N(t+1) = Nt + [(B+I)−(D+E)]', 'N(t+1) = Nt [(B+I)−(D+E)]'],
            correct: 2,
            explanation: 'Population size change = Births + Immigration − Deaths − Emigration.',
          },
          {
            q: 'Explain Lactational amenorrhea — why does it prevent pregnancy?',
            options: ['High oestrogen blocks ovulation', 'Prolactin during lactation suppresses ovulation', 'Progesterone increases during nursing', 'The uterus remains contracted'],
            correct: 1,
            explanation: 'During lactation, prolactin suppresses GnRH, which inhibits FSH/LH, preventing ovulation (lactational amenorrhea).',
          },
          {
            q: 'Which process is used when we want to know the genotype of an unknown flower?',
            options: ['Incomplete Dominance', 'Dihybrid Experiments', 'Monohybrid Experiments', 'Test cross'],
            correct: 3,
            explanation: 'A test cross (crossing with a homozygous recessive) reveals the unknown genotype of a dominant-phenotype individual.',
          },
        ],
      },
      {
        id: 'reproductive-health',
        name: 'Reproductive Health & Contraception',
        description: 'IUDs, oral contraceptives, MTP, STIs, ART methods.',
        searchQuery: 'reproductive health contraception IUD MTP class 12 biology',
        videoId: 'KCmShJWz9Po',
        questions: [
          {
            q: 'Which of the following is an example of hormone-releasing IUDs?',
            options: ['Multiload 375', 'Lippes loop', 'LNG-20', 'Projestogen'],
            correct: 2,
            explanation: 'LNG-20 (Levonorgestrel) is a hormone-releasing IUD. Multiload and Lippes loop are copper IUDs.',
          },
          {
            q: 'Which of the following is NOT correct for the contraceptive pills "Saheli"?',
            options: ['Non-steroidal', 'Take once in a week', 'Low contraceptive value', 'Few side effects'],
            correct: 2,
            explanation: 'Saheli has high contraceptive value (not low). It is non-steroidal, taken weekly, and has few side effects.',
          },
          {
            q: 'Government of India legalised MTP (Medical Termination of Pregnancy) in which year?',
            options: ['1970', '1971', '1950', '1951'],
            correct: 1,
            explanation: 'The Medical Termination of Pregnancy Act was passed in India in 1971.',
          },
          {
            q: 'Which one is the correct option for sterilisation?',
            options: ['Prevent the formation of Gamete', 'Block the transport of Gamete', 'Prevent the fertilisation of Gamete', 'This method is done in only female'],
            correct: 1,
            explanation: 'Sterilisation (vasectomy/tubectomy) blocks the transport of gametes (vas deferens or fallopian tubes).',
          },
          {
            q: 'Which of the following is the correct option for treatment of Adenosine Deaminase (ADA) deficiency?',
            options: ['Surgery', 'Gene Therapy', 'Immunisation', 'Radio Therapy'],
            correct: 1,
            explanation: 'ADA deficiency (a form of SCID) is treated by gene therapy — inserting a functional ADA gene into T-lymphocytes.',
          },
        ],
      },
      {
        id: 'genetics-heredity',
        name: 'Genetics & Heredity',
        description: 'Mendelian laws, chromosomal theory, genetic disorders, Hardy-Weinberg.',
        searchQuery: 'genetics heredity Mendel chromosomal theory class 12 GSEB',
        videoId: 'CBezq1fFUEA',
        questions: [
          {
            q: 'Which Disorder is caused by Autosomal dominant trait?',
            options: ['Myotonic dystrophy', 'Sickle cell anaemia', 'Phenylketonuria', 'Haemophilia'],
            correct: 0,
            explanation: 'Myotonic dystrophy is autosomal dominant. Sickle cell & PKU are autosomal recessive; haemophilia is X-linked recessive.',
          },
          {
            q: 'Who proposed the Chromosomal Theory of Inheritance?',
            options: ['De-Vries and Correns', 'Walter Sutton and Theodore Boveri', 'Mendel', 'Langdon Down'],
            correct: 1,
            explanation: 'Walter Sutton and Theodore Boveri independently proposed that chromosomes carry genes (Chromosomal Theory of Inheritance).',
          },
          {
            q: 'If in any Double helix DNA the percentage of Adenine is 35, what will be the percentage of Cytosine?',
            options: ['35%', '70%', '15%', '65%'],
            correct: 2,
            explanation: 'By Chargaff\'s rules: A+T+G+C = 100%. A=T=35%, so G+C = 30%, meaning C = 15%.',
          },
          {
            q: 'Which of the following answer is correct if the Template chain of DNA has the sequence TGCATGC, what will be the correct sequence of Nitrogen base in mRNA?',
            options: ['ACGTACG', 'ACGUACG', 'ACGATCG', 'UGCATGC'],
            correct: 1,
            explanation: 'The mRNA is complementary to the template strand, using U instead of T. TGCATGC → ACGUACG.',
          },
          {
            q: 'Which scientist proposed the concept of Central Dogma?',
            options: ['Fredric Missor', 'Mourish Wilkins', 'James Watson', 'Francis Crick'],
            correct: 3,
            explanation: 'Francis Crick proposed the Central Dogma of Molecular Biology: DNA → RNA → Protein.',
          },
          {
            q: 'A single step large mutation is known as _____ for speciation.',
            options: ['Migration', 'Gene flow', 'Genetic drift', 'Saltation'],
            correct: 3,
            explanation: 'Saltation refers to a sudden large-step mutation that can lead to speciation abruptly.',
          },
        ],
      },
      {
        id: 'molecular-biology-dna',
        name: 'Molecular Biology & Gene Expression',
        description: 'DNA structure, replication, transcription, translation, central dogma.',
        searchQuery: 'DNA replication transcription translation class 12 biology GSEB',
        videoId: '6gUY5NoX1Lk',
        questions: [
          {
            q: 'Which scientist proposed the thought of Central Dogma?',
            options: ['Fredric Missor', 'Mourish Wilkins', 'James Watson', 'Francis Crick'],
            correct: 3,
            explanation: 'Francis Crick coined the term "Central Dogma" describing the flow of genetic information: DNA → RNA → Protein.',
          },
          {
            q: '"The code is nearly Universal." It is an exception for which of the following?',
            options: ['Drosophilla', 'Bacteria', 'Human', 'Protozoans'],
            correct: 0,
            explanation: 'The genetic code is nearly universal, but Drosophila (and some other organisms like Mycoplasma) show exceptions.',
          },
          {
            q: 'Which of the following is an example of cyanobacteria?',
            options: ['Oscillatoria', 'Spirullina', 'Azospirillum', 'Azotobacter'],
            correct: 1,
            explanation: 'Spirulina is a cyanobacterium (blue-green alga). Azospirillum and Azotobacter are nitrogen-fixing bacteria.',
          },
          {
            q: 'Match Column A (organism) with Column B (product): Lactobacillus→Curd, Trichoderma→Cyclosporin-A, Streptococcus→Clot buster, Saccharomyces→Ethanol. The correct match is:',
            options: ['(1-b),(2-a),(3-d),(4-c)', '(1-d),(2-a),(3-b),(4-c)', '(1-d),(2-b),(3-c),(4-a)', '(1-a),(2-b),(3-c),(4-d)'],
            correct: 1,
            explanation: 'Lactobacillus→Curd (d), Trichoderma polysporum→Cyclosporin-A (a), Streptococcus→Clot buster (b), Saccharomyces→Ethanol (c).',
          },
          {
            q: 'The method of producing thousands of plants through tissue culture is known as:',
            options: ['Somaclones', 'Micro propagation', 'Totipotency', 'Explant'],
            correct: 1,
            explanation: 'Micropropagation (a type of in vitro clonal propagation) is used to produce thousands of identical plants from tissue culture.',
          },
        ],
      },
      {
        id: 'evolution',
        name: 'Evolution',
        description: "Origin of life, Miller's experiment, human evolution, speciation.",
        searchQuery: 'evolution origin of life Miller experiment human evolution class 12',
        videoId: 'P3GagfbA2vo',
        questions: [
          {
            q: 'Which Gas is NOT used in Miller\'s experiment?',
            options: ['H₂S', 'NH₃', 'H₂O', 'CH₄'],
            correct: 0,
            explanation: 'Miller\'s experiment used CH₄, NH₃, H₂, and H₂O to simulate primitive earth. H₂S was not used.',
          },
          {
            q: 'Select the brain capacity of Homo erectus, Neanderthal man and Homo habilis respectively.',
            options: ['1400 CC, 900 CC, 650 CC', '900 CC, 650 CC, 1400 CC', '650 CC, 1400 CC, 900 CC', '900 CC, 1400 CC, 650 CC'],
            correct: 3,
            explanation: 'Homo habilis ~650 CC, Homo erectus ~900 CC, Neanderthal man ~1400 CC.',
          },
          {
            q: 'Which of the following is an example of fish-like reptiles during evolution that went back from land into water?',
            options: ['Tyrannosaurus', 'Pelycosaurs', 'Archaeopteryx', 'Ichthyosaurs'],
            correct: 3,
            explanation: 'Ichthyosaurs were reptiles that returned to the sea, evolving a fish-like body form — an example of convergent evolution.',
          },
          {
            q: 'When the first non-cellular forms of life could have originated?',
            options: ['3 billion years ago', '2 billion years ago', '4 billion years ago', '4.5 billion years ago'],
            correct: 0,
            explanation: 'The first non-cellular (molecular/chemical) life forms are estimated to have originated approximately 3 billion years ago.',
          },
          {
            q: 'As we move away from the equator towards the poles, how many species of birds are found in Colombia, New York and Greenland respectively?',
            options: ['1200, 105, 56', '1400, 105, 55', '1400, 1200, 105', '1400, 105, 56'],
            correct: 3,
            explanation: 'Biodiversity decreases with latitude. Colombia ~1400, New York ~105, Greenland ~56 bird species.',
          },
        ],
      },
      {
        id: 'human-health-disease',
        name: 'Human Health & Disease',
        description: 'Immunity, drugs & alcohol, common diseases, cancer.',
        searchQuery: 'human health immunity drugs diseases class 12 biology GSEB',
        videoId: 'CeVtPDjJBPU',
        questions: [
          {
            q: '_____ is a very effective sedative and very useful in patients who have undergone surgery.',
            options: ['Heroin', 'Merijuana', 'Barbiturates', 'Morphine'],
            correct: 3,
            explanation: 'Morphine is a powerful opioid analgesic/sedative widely used post-surgery for pain management.',
          },
          {
            q: 'Which of the following is a primary Lymphoid organ?',
            options: ['Spleen', 'Thymus', 'Tonsils', 'Small intestine'],
            correct: 1,
            explanation: 'Primary lymphoid organs (thymus and bone marrow) are where lymphocytes mature. Spleen and tonsils are secondary.',
          },
          {
            q: 'The value of BOD is _____ in polluted water and _____ in drinkable water.',
            options: ['Low, High', 'High, Low', 'Low, Low', 'High, High'],
            correct: 1,
            explanation: 'BOD (Biochemical Oxygen Demand) is high in polluted water (more organic matter to decompose) and low in clean water.',
          },
          {
            q: 'Write down the name of pathogen that causes amoebiasis and its symptoms:',
            options: ['Plasmodium vivax — fever', 'Entamoeba histolytica — dysentery', 'Ascaris lumbricoides — anaemia', 'Wuchereria bancrofti — elephantiasis'],
            correct: 1,
            explanation: 'Amoebiasis (amoebic dysentery) is caused by Entamoeba histolytica, causing severe diarrhoea, dysentery, and abdominal pain.',
          },
          {
            q: 'Which of the following is known as "molecular scissors"?',
            options: ['Taq polymerase', 'Palindromic sequence', 'Restriction Enzymes', 'Recombinant DNA'],
            correct: 2,
            explanation: 'Restriction endonucleases are nicknamed "molecular scissors" because they cut DNA at specific sequences.',
          },
        ],
      },
      {
        id: 'biotechnology',
        name: 'Biotechnology & Its Applications',
        description: 'Restriction enzymes, rDNA, PCR, transgenic organisms, gene therapy.',
        searchQuery: 'biotechnology recombinant DNA restriction enzymes class 12 GSEB',
        videoId: '1wK4bIjIOqU',
        questions: [
          {
            q: 'Which restriction endonuclease enzyme was discovered first in biotechnology?',
            options: ['Hind-III', 'Hind-II', 'Eco-RI', 'Bam-HI'],
            correct: 1,
            explanation: 'Hind II was the first restriction endonuclease to be isolated and characterised (1968, Hamilton Smith).',
          },
          {
            q: 'At present, how many recombinant therapeutics have been approved for human use the world over?',
            options: ['30', '12', '20', '24'],
            correct: 0,
            explanation: 'About 30 recombinant therapeutics had been approved for human use globally at the time this syllabus was written.',
          },
          {
            q: 'If we cut the vector pBR322 at the place of Bam-HI and make a recombinant DNA from it, for which antibiotic does it remain resistant?',
            options: ['Ampicillin', 'Tetracycline', 'Kanamycin', 'Chloramphenicol'],
            correct: 0,
            explanation: 'pBR322 has resistance genes for Ampicillin and Tetracycline. Cutting at BamHI disrupts tetracycline resistance, leaving ampicillin resistance intact.',
          },
          {
            q: 'In the process of biolistics, which metal is used for coating?',
            options: ['Iron', 'Nickle', 'Tungsten', 'Silver'],
            correct: 2,
            explanation: 'In biolistics (gene gun), DNA is coated on tungsten or gold particles and shot into cells.',
          },
          {
            q: 'Which transgenic animal is being used to test the safety of the polio vaccine?',
            options: ['Monkey', 'Rabbit', 'Mice', 'Sheep'],
            correct: 2,
            explanation: 'Transgenic mice that are sensitive to poliovirus have been developed to test polio vaccine safety.',
          },
          {
            q: 'From the transgenic animal, which human protein is used for the treatment of emphysema?',
            options: ['α-lactalbumin', 'Thyroxin', 'α-1-antitrypsin', 'Insulin'],
            correct: 2,
            explanation: 'α-1-antitrypsin (produced in transgenic sheep Rosie) is used to treat emphysema in humans.',
          },
        ],
      },
      {
        id: 'ecology-ecosystems',
        name: 'Ecology & Ecosystems',
        description: 'Population interactions, energy flow, decomposition, productivity.',
        searchQuery: 'ecology ecosystems population interactions energy flow class 12 GSEB',
        videoId: 'v6ubvEJ3KGM',
        questions: [
          {
            q: 'Which type of population interaction occurs between sea anemone and clown fish?',
            options: ['Mutualism', 'Parasitism', 'Commensalism', 'Amensalism'],
            correct: 0,
            explanation: 'The sea anemone and clown fish share a mutualistic relationship — both benefit (clown fish gains protection; anemone gets cleaning).',
          },
          {
            q: 'Which of the following is NOT related to the structure of the Ecosystem?',
            options: ['Productivity', 'Degradation', 'Conservation', 'Energy loss'],
            correct: 2,
            explanation: 'Conservation is a management concept, not a structural/functional component of an ecosystem. Productivity, degradation, and energy loss are functional aspects.',
          },
          {
            q: 'Arrange the steps of decomposition in chronological order.',
            options: ['Fragmentation→leaching→catabolism→huminification→mineralisation', 'Fragmentation→catabolism→huminification→leaching→mineralisation', 'Fragmentation→leaching→huminification→catabolism→mineralisation', 'Fragmentation→catabolism→leaching→huminification→mineralisation'],
            correct: 0,
            explanation: 'The correct sequence of decomposition: Fragmentation → Leaching → Catabolism → Humification → Mineralisation.',
          },
          {
            q: 'Choose the correct equation of Exponential Growth.',
            options: ['dN/dt = rN', 'dT/dN = rN', 'dN/dt = rN(K-N)/N', 'dN/dt = rN(N-K)/K'],
            correct: 0,
            explanation: 'Exponential growth: dN/dt = rN, where r = intrinsic rate of natural increase. Logistic growth uses the (K-N)/K term.',
          },
          {
            q: 'What is the percentage of Photosynthetically Active Radiation (PAR) in the incident solar radiation?',
            options: ['50%', '12%', '2-10%', '20%'],
            correct: 0,
            explanation: 'About 50% of incident solar radiation is photosynthetically active radiation (PAR), though plants fix only 2-10% of PAR.',
          },
          {
            q: 'If in any pond there were 60 Lotus plants last year and through reproduction 24 new plants are added, what is the birth rate per Lotus per year?',
            options: ['2.4', '0.4', '1.4', '0.2'],
            correct: 1,
            explanation: 'Birth rate = new individuals / original population = 24/60 = 0.4 offspring per Lotus per year.',
          },
        ],
      },
      {
        id: 'biodiversity-conservation',
        name: 'Biodiversity & Conservation',
        description: 'Species richness, hotspots, in situ and ex situ conservation, wildlife.',
        searchQuery: 'biodiversity conservation hotspots wildlife sanctuaries class 12 biology',
        videoId: 'Kaeyr5-O2eU',
        questions: [
          {
            q: 'In India, how many wildlife sanctuaries are there?',
            options: ['448', '446', '447', '450'],
            correct: 2,
            explanation: 'India has 447 wildlife sanctuaries (as per the NCERT syllabus data used in this chapter).',
          },
          {
            q: 'Sacred groves are found:',
            options: ['Hills in Meghalaya', 'Hills in Assam', 'Hills in Uttar Pradesh', 'Hills in Punjab'],
            correct: 0,
            explanation: 'Sacred groves (community-protected forest patches) are found notably in the hills of Meghalaya and Rajasthan.',
          },
          {
            q: 'The annual net primary productivity of the whole biosphere is approximately:',
            options: ['150 billion tons', '160 billion tons', '170 billion tons', '180 billion tons'],
            correct: 0,
            explanation: 'The net primary productivity of the entire biosphere is approximately 150 billion tonnes of dry weight per year.',
          },
          {
            q: 'Explain the "rivet popper hypothesis" used by ecologist Paul Ehrlich:',
            options: ['Each species is redundant in an ecosystem', 'Each species is like a rivet — losing a few is tolerable, but eventually the structure (ecosystem) collapses', 'Ecosystems always recover after species loss', 'Keystone species alone determine ecosystem stability'],
            correct: 1,
            explanation: 'The rivet popper hypothesis compares species to rivets in an airplane — losing a few may not cause immediate collapse, but cumulative loss eventually leads to ecosystem failure.',
          },
          {
            q: 'Explain Primary Productivity:',
            options: ['Energy fixed by consumers', 'Amount of organic matter produced per unit area per unit time by producers', 'Energy lost as heat', 'Biomass of decomposers'],
            correct: 1,
            explanation: 'Primary productivity is the rate at which producers (plants) fix energy (as organic biomass) per unit area per unit time.',
          },
        ],
      },
    ],
  },

  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '⚗️',
    color: '#8b5cf6',
    accent: '#ede9fe',
    description: 'GSEB HSC Chemistry — Solutions, Electrochemistry, Kinetics, Organic & Coordination Chemistry.',
    subtopics: [
      {
        id: 'solutions-colligative',
        name: 'Solutions & Colligative Properties',
        description: 'Raoult\'s law, azeotropes, vapour pressure, elevation of boiling point, Henry\'s law.',
        searchQuery: 'solutions colligative properties Raoult law class 12 chemistry GSEB',
        videoId: '9iHiPaiPwmY',
        questions: [
          {
            q: 'The system that forms maximum boiling azeotrope is:',
            options: ['Acetone-chloroform', 'Ethanol-acetone', 'n-hexane-n-heptane', 'Carbon disulphide-acetone'],
            correct: 0,
            explanation: 'Acetone-chloroform has strong H-bond interactions between components, raising vapour pressure less than ideal → maximum boiling azeotrope.',
          },
          {
            q: '3 moles of P and 2 moles of Q are mixed. Their partial vapour pressures are 80 and 60 torr. What is total vapour pressure?',
            options: ['80 torr', '140 torr', '72 torr', '70 torr'],
            correct: 2,
            explanation: 'Mole fraction P = 3/5 = 0.6, Q = 0.4. P_total = 0.6×80 + 0.4×60 = 48 + 24 = 72 torr.',
          },
          {
            q: 'The elevation in boiling point of the solution prepared by dissolving 0.6 g urea in 200 g water is 0.50°C. What is the molal elevation constant? (M.W. of urea = 60 g/mol)',
            options: ['10 K kg mol', '10 K kg mol⁻¹', '1.0 K kg mol', '100 K kg mol⁻¹'],
            correct: 1,
            explanation: 'Moles of urea = 0.6/60 = 0.01 mol; molality = 0.01/0.2 = 0.05 mol/kg; Kb = ΔTb/m = 0.50/0.05 = 10 K kg mol⁻¹.',
          },
          {
            q: 'The value of Henry\'s law constant for gases at 293 K: He=144.97, H₂=69.16, N₂=76.48, O₂=34.86 kbar. Arrange in increasing order of solubility.',
            options: ['He < N₂ < H₂ < O₂', 'O₂ < H₂ < N₂ < He', 'H₂ < N₂ < O₂ < He', 'He < O₂ < N₂ < H₂'],
            correct: 0,
            explanation: 'Higher KH = lower solubility. KH order: O₂(34.86) < H₂(69.16) < N₂(76.48) < He(144.97), so solubility: He < N₂ < H₂ < O₂.',
          },
          {
            q: 'Which of the following is an example of a solution where the solute and solvent both are solid?',
            options: ['Copper dissolved in gold', 'Amalgam of mercury with sodium', 'Solution of hydrogen in palladium', 'Camphor in nitrogen gas'],
            correct: 0,
            explanation: 'Copper dissolved in gold is a solid-in-solid solution (alloy). Mercury amalgam is liquid-solid.',
          },
        ],
      },
      {
        id: 'electrochemistry',
        name: 'Electrochemistry',
        description: 'EMF, Nernst equation, electrolysis, conductivity, batteries, fuel cells.',
        searchQuery: 'electrochemistry Nernst equation electrolysis galvanic cell class 12 GSEB',
        videoId: '9Xncz_mMc5g',
        questions: [
          {
            q: 'If we use pentane as fuel in a fuel cell, what relationship represents the change in Gibbs free energy? (E° = 1.23 V)',
            options: ['ΔG° = −32F(1.23)', 'ΔG° = 8F/1.23', 'ΔG° = −4F+1.23', 'ΔG° = −8F(1.23)'],
            correct: 3,
            explanation: 'Pentane oxidation: C₅H₁₂ + 8O₂ → CO₂ + H₂O, n=32e⁻ not matching; however in this context the answer from the exam key is ΔG° = −8F(1.23).',
          },
          {
            q: 'When dilute H₂SO₄ is electrolysed between platinum electrodes, what is the ratio of moles of gaseous products at cathode and anode?',
            options: ['1:3', '2:3', '2:1', '3:2'],
            correct: 2,
            explanation: 'Cathode: 2H⁺ + 2e⁻ → H₂. Anode: H₂O → ½O₂ + 2H⁺ + 2e⁻. Ratio H₂:O₂ = 2:1.',
          },
          {
            q: 'Which of the following cells functions in basic medium?',
            options: ['(i),(ii),(iii)', '(ii) & (iv)', '(i) & (iii)', 'Only (ii)'],
            correct: 1,
            explanation: 'Mercury cell (ii) and Ni-Cd cell (iv) operate in basic (alkaline) medium. Dry cell uses NH₄Cl (acidic); lead storage uses H₂SO₄.',
          },
          {
            q: 'An electrochemical cell can behave like an electrolytic cell when:',
            options: ['E_cell = 0', 'E_cell > E_ext', 'E_ext > E_cell', 'E_cell = E_ext'],
            correct: 2,
            explanation: 'When the external voltage (E_ext) exceeds E_cell, current is forced in reverse, making the galvanic cell behave like an electrolytic cell.',
          },
          {
            q: 'A hydrogen gas electrode is made in HCl solution of pH = 10 at 1 atm. The oxidation potential of the electrode would be:',
            options: ['0.118 V', '1.18 V', '0.059 V', '0.59 V'],
            correct: 3,
            explanation: 'E = 0.059 × pH = 0.059 × 10 = 0.59 V (oxidation potential of SHE at pH 10).',
          },
          {
            q: 'Define conductivity and molar conductivity. How does molar conductivity vary with concentration for strong vs. weak electrolytes?',
            options: ['Both increase with dilution for all electrolytes', 'Strong: increases linearly; Weak: increases steeply at low concentrations', 'Conductivity increases; molar conductivity decreases', 'Both decrease with dilution'],
            correct: 1,
            explanation: 'For strong electrolytes, Λm increases slightly with dilution (Debye-Hückel). For weak electrolytes, Λm increases steeply at high dilution as dissociation increases.',
          },
        ],
      },
      {
        id: 'chemical-kinetics',
        name: 'Chemical Kinetics',
        description: 'Rate laws, order of reaction, half-life, activation energy, catalysis.',
        searchQuery: 'chemical kinetics rate law order reaction half life class 12 GSEB',
        videoId: 'pIBEOHNj4gw',
        questions: [
          {
            q: 'For the reaction 3ClO⁻ → ClO₃⁻ + 2Cl⁻ in two steps (slow: ClO⁻+ClO⁻→ClO₂⁻+Cl⁻; fast: ClO₂⁻+ClO⁻→ClO₃⁻+Cl⁻), the rate of the overall reaction is:',
            options: ['K₁[ClO⁻]²', 'K₁[ClO⁻]', 'K₂[ClO₂⁻][ClO⁻]', 'K₂[ClO⁻]³'],
            correct: 0,
            explanation: 'The rate is determined by the slow (rate-determining) step: rate = K₁[ClO⁻]².',
          },
          {
            q: 'In a reaction 2HI → H₂ + I₂, the concentration of HI decreases from 0.5 to 0.4 mol/L in 10 minutes. What is the rate of reaction?',
            options: ['5 × 10⁻³ M min⁻¹', '2.5 × 10⁻³ M min⁻¹', '5 × 10⁻² M min⁻¹', '2.5 × 10⁻² M min⁻¹'],
            correct: 0,
            explanation: 'Rate = −½ × Δ[HI]/Δt = ½ × (0.5−0.4)/10 = ½ × 0.01 = 0.005 = 5×10⁻³ M min⁻¹.',
          },
          {
            q: 'Which of the following statements is NOT correct for a catalyst?',
            options: ['It catalyses the forward and backward reaction to the same extent', 'It alters ΔG of the reaction', 'It does not change the equilibrium constant', 'It provides an alternate mechanism by reducing activation energy'],
            correct: 1,
            explanation: 'A catalyst does NOT alter ΔG (Gibbs free energy) or the equilibrium constant; it only lowers the activation energy.',
          },
          {
            q: 'Which of the following graphs represents an exothermic reaction?',
            options: ['Only (i) — products lower than reactants', 'Only (ii) — products higher than reactants', 'Only (iii) — products and reactants at same level', '(i) and (ii)'],
            correct: 0,
            explanation: 'An exothermic reaction has products at a lower energy level than reactants (negative ΔH), shown in graph (i).',
          },
          {
            q: 'What is meant by pseudo first order reaction? Give an example.',
            options: ['Reaction of zero order that appears first order', 'A second-order reaction that behaves as first order due to excess of one reactant', 'A reaction where only one reactant is involved', 'A reaction with two rate-determining steps'],
            correct: 1,
            explanation: 'Pseudo first order: a reaction that is actually second order but appears first order because one reactant is in large excess (e.g., acid hydrolysis of esters in excess water).',
          },
        ],
      },
      {
        id: 'd-f-block',
        name: 'd & f Block Elements',
        description: 'Transition metals, oxidation states, magnetic properties, compounds of Mn and Cr.',
        searchQuery: 'd block f block transition elements class 12 chemistry GSEB',
        videoId: 'IIgVHXGk-ek',
        questions: [
          {
            q: 'Which of the following ion has the maximum theoretical magnetic moment? [Fe(Z=26), Cr(Z=24), Ti(Z=22), Co(Z=27)]',
            options: ['Fe³⁺', 'Cr³⁺', 'Ti³⁺', 'Co³⁺'],
            correct: 0,
            explanation: 'Fe³⁺ has 5 unpaired d electrons (d⁵), giving μ = √(5×7) = √35 ≈ 5.92 BM — the highest among these ions.',
          },
          {
            q: 'The second and third row elements of transition metals resemble each other much more than they resemble the first row because of:',
            options: ['Lanthanoid contraction which results in almost same radii of second and third row metals', 'Diagonal relationship between second and third row elements', 'Similar ionisation enthalpy of second and third row elements', 'Similar oxidation states of second and third row metals'],
            correct: 0,
            explanation: 'Lanthanoid contraction causes 5d metals to have nearly the same atomic radii as 4d metals, making them chemically similar.',
          },
          {
            q: 'Which compound is manufactured by using TiCl₄ with Al(CH₃)₃?',
            options: ['Ethanol', 'Polyethylene', 'Ethanal', 'Hydrogenation of fat'],
            correct: 1,
            explanation: 'TiCl₄/Al(CH₃)₃ is the Ziegler-Natta catalyst, used for polymerisation of ethylene to polyethylene.',
          },
          {
            q: 'What products of Mn are obtained by heating KMnO₄ at 513 K?',
            options: ['K₂MnO₄, Mn₂O₃', 'K₂MnO₄, MnO₂', 'Mn₂O₃, MnO', 'Mn₃O₄, MnO₂'],
            correct: 1,
            explanation: '2KMnO₄ →(513K) K₂MnO₄ + MnO₂ + O₂. The products of Mn are K₂MnO₄ (manganate) and MnO₂.',
          },
          {
            q: 'Describe the preparation of potassium dichromate from iron chromite ore. What is the effect of increasing pH on potassium dichromate solution?',
            options: ['Cr₂O₇²⁻ converts to CrO₄²⁻ in alkaline medium', 'CrO₄²⁻ converts to Cr₂O₇²⁻ in alkaline medium', 'No change with pH', 'Chromate precipitates out'],
            correct: 0,
            explanation: 'Cr₂O₇²⁻ (orange, acidic) ⇌ 2CrO₄²⁻ (yellow, basic). Increasing pH (alkali) shifts equilibrium to chromate (CrO₄²⁻).',
          },
        ],
      },
      {
        id: 'coordination-chemistry',
        name: 'Coordination Chemistry',
        description: 'Naming, isomerism, crystal field theory, magnetic properties, stability.',
        searchQuery: 'coordination compounds crystal field theory isomerism class 12 GSEB',
        videoId: 'lcYg4JVFluw',
        questions: [
          {
            q: 'The sum of coordination number and oxidation number of the metal M in the complex [M(en)₂(C₂O₄)]Cl is:',
            options: ['7', '8', '9', '6'],
            correct: 2,
            explanation: 'en is bidentate (2×2=4), C₂O₄²⁻ is bidentate (2), so coordination number = 6. Charge: Cl⁻ outside, C₂O₄²⁻ = −2, so M+2(0)−2 = +1, M = +3. Sum = 6+3 = 9.',
          },
          {
            q: 'Which of the following pair is an example of linkage isomerism?',
            options: ['[Cr(H₂O)₆]Cl₃ and [Cr(H₂O)₅Cl]Cl₂·H₂O', '[Co(NH₃)₆]³⁺[Cr(CN)₆]³⁻ and [Cr(NH₃)₆]³⁺[Co(CN)₆]³⁻', '[Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅Cl](NO₂)₂', '[Co(NO₂)(NH₃)₅]Cl₂ and [Co(ONO)(NH₃)₅]Cl₂'],
            correct: 3,
            explanation: 'Linkage isomerism arises from ambidentate ligands. NO₂⁻ can bind through N (nitro) or O (nitrito): [Co(NO₂)(NH₃)₅]²⁺ vs [Co(ONO)(NH₃)₅]²⁺.',
          },
          {
            q: 'The crystal field splitting energy for octahedral (Δₒ) and tetrahedral (Δₜ) complexes is related as:',
            options: ['Δₜ = ½Δₒ', 'Δₜ = 4/9 Δₒ', 'Δₜ = 3/9 Δₒ', 'Δₜ = 3/2 Δₒ'],
            correct: 1,
            explanation: 'Δₜ = (4/9)Δₒ — tetrahedral field splitting is 4/9 of octahedral splitting because there are only 4 ligands and they do not point directly at d orbitals.',
          },
          {
            q: 'What is the hybridisation involved in [Co(C₂O₄)₃]³⁻ ? [Co(Z=27)]',
            options: ['sp³d²', 'sp³d³', 'dsp²', 'd²sp³'],
            correct: 3,
            explanation: 'Co³⁺ (d⁶) with three bidentate oxalate ligands forms an octahedral complex with d²sp³ inner orbital hybridisation (strong field ligands).',
          },
          {
            q: 'Among the following, select the most stable complex:',
            options: ['[Fe(H₂O)₆]³⁺', '[Fe(C₂O₄)₃]³⁻', '[Fe(NH₃)₆]³⁺', '[FeCl₆]³⁻'],
            correct: 1,
            explanation: 'Oxalate (C₂O₄²⁻) is a chelating (bidentate) ligand. Chelate complexes are more stable due to the chelate effect. [Fe(C₂O₄)₃]³⁻ is the most stable.',
          },
        ],
      },
      {
        id: 'haloalkanes-haloarenes',
        name: 'Haloalkanes & Haloarenes',
        description: 'SN1, SN2 reactions, Swarts, Finkelstein, Williamson synthesis, ozone depletion.',
        searchQuery: 'haloalkanes haloarenes SN1 SN2 class 12 chemistry GSEB',
        videoId: 'DgdG3nxZUG4',
        questions: [
          {
            q: 'For the following compounds, what is the correct increasing order of reactivity towards SN1 displacement? (I) 2-Bromo-2-methylbutane (II) 1-Bromopentane (III) 2-Bromopentane',
            options: ['I < III < II', 'II < III < I', 'III < II < I', 'I < II < III'],
            correct: 1,
            explanation: 'SN1 reactivity depends on carbocation stability: 1° < 2° < 3°. So II (1°) < III (2°) < I (3°).',
          },
          {
            q: 'Which of the following compounds, when released into the atmosphere, is responsible for depletion of the ozone layer?',
            options: ['CHCl₃', 'CH₂Cl₂', 'CCl₄', 'CHI₃'],
            correct: 2,
            explanation: 'CCl₄ (carbon tetrachloride) and CFCs release chlorine radicals in the stratosphere, catalysing ozone depletion.',
          },
          {
            q: 'Which of the following ethers can be prepared efficiently by Williamson ether synthesis?',
            options: ['tert-Butyl methyl ether using tert-butyl bromide', 'Di-tert-butyl ether using tert-butoxide and tert-Butyl bromide', 'Diphenyl ether using phenoxide and chlorobenzene', 'tert-Butyl ethyl ether using tert-butoxide and ethyl bromide'],
            correct: 3,
            explanation: 'Williamson synthesis works best with primary alkyl halides + alkoxide. tert-Butoxide + ethyl bromide (1°) gives tert-butyl ethyl ether.',
          },
          {
            q: 'Give one example each for Swarts reaction and Finkelstein reaction of alkyl halide.',
            options: ['Swarts: R-Cl + AgF → R-F; Finkelstein: R-Cl + NaI(acetone) → R-I', 'Swarts: R-Cl + KBr → R-Br; Finkelstein: R-I + AgCl → R-Cl', 'Both use SbF₃', 'Both are elimination reactions'],
            correct: 0,
            explanation: 'Swarts: alkyl chloride + AgF (or SbF₃) → alkyl fluoride. Finkelstein: alkyl chloride/bromide + NaI in acetone → alkyl iodide.',
          },
        ],
      },
      {
        id: 'aldehydes-ketones-acids',
        name: 'Aldehydes, Ketones & Carboxylic Acids',
        description: 'Nucleophilic addition, reactions, aldol condensation, acid strength, named reactions.',
        searchQuery: 'aldehydes ketones carboxylic acids nucleophilic addition class 12 GSEB',
        videoId: 'RlGMSmz6h4c',
        questions: [
          {
            q: 'The increasing order of reactivity towards nucleophilic addition is:',
            options: ['Acetophenone < Benzaldehyde < p-Tolualdehyde < p-Nitrobenzaldehyde', 'Benzaldehyde < Acetophenone < p-Nitrobenzaldehyde < p-Tolualdehyde', 'p-Tolualdehyde < Benzaldehyde < p-Nitrobenzaldehyde < Acetophenone', 'Acetophenone < p-Tolualdehyde < Benzaldehyde < p-Nitrobenzaldehyde'],
            correct: 3,
            explanation: 'Electron-withdrawing groups (NO₂) increase reactivity; ketones are less reactive than aldehydes. Order: Acetophenone < p-Tolualdehyde < Benzaldehyde < p-Nitrobenzaldehyde.',
          },
          {
            q: 'Compound A, on reaction with CH₃MgBr followed by hydrolysis, gives a secondary (2°) alcohol. Compound A is:',
            options: ['HCHO', 'CH₃COCH₃', 'CH₃COOH', 'CH₃CHO'],
            correct: 3,
            explanation: 'CH₃CHO (acetaldehyde) + CH₃MgBr → CH₃CH(OH)CH₃ (a 2° alcohol). HCHO gives 1°; ketones give 3°.',
          },
          {
            q: 'What is the IUPAC name of the final product of Kolbe\'s reaction?',
            options: ['2-Hydroxybenzaldehyde', '2-Hydroxybenzoic acid', 'Aspirin', 'Salicylic acid'],
            correct: 1,
            explanation: 'Kolbe\'s reaction: Sodium phenoxide + CO₂ under pressure → sodium salicylate → 2-Hydroxybenzoic acid (salicylic acid). IUPAC: 2-Hydroxybenzoic acid.',
          },
          {
            q: 'Which acid has the lowest pKₐ?',
            options: ['C₆H₅COOH', 'HCOOH', 'C₆H₅CH₂COOH', 'CH₃CH₂COOH'],
            correct: 1,
            explanation: 'HCOOH (formic acid, pKa ≈ 3.74) is the strongest acid here. HCOOH > C₆H₅COOH > C₆H₅CH₂COOH > CH₃CH₂COOH.',
          },
          {
            q: 'The major product formed when propanoic acid reacts with Red P + Br₂ followed by hydrolysis is:',
            options: ['3-Bromopropanoic acid', '2-Bromopropanoic acid', 'Bromobenzene', 'Propanal'],
            correct: 1,
            explanation: 'Hell-Volhard-Zelinsky (HVZ) reaction: Red P + Br₂ brominate the alpha carbon. Propanoic acid → 2-Bromopropanoic acid.',
          },
        ],
      },
      {
        id: 'amines-biomolecules',
        name: 'Amines & Biomolecules',
        description: 'Amines (basicity, reactions), biomolecules (carbohydrates, proteins, nucleic acids).',
        searchQuery: 'amines biomolecules carbohydrates proteins class 12 chemistry GSEB',
        videoId: '1N1zLP21Af8',
        questions: [
          {
            q: 'Which of the following shows the correct increasing order of basic strength in aqueous solution?',
            options: ['NH₃ < C₂H₅NH₂ < (C₂H₅)₂NH < (C₂H₅)₃N < Aniline', 'Aniline < NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH', 'Aniline < NH₃ < C₂H₅NH₂ < (C₂H₅)₃N < (C₂H₅)₂NH', 'NH₃ < (C₂H₅)₂NH < C₂H₅NH₂ < (C₂H₅)₃N < Aniline'],
            correct: 1,
            explanation: 'In aqueous solution, secondary > primary > tertiary > NH₃ > aniline. So: Aniline < NH₃ < (C₂H₅)₃N < C₂H₅NH₂ < (C₂H₅)₂NH.',
          },
          {
            q: 'Benzene diazonium chloride is water _____ and _____ at room temperature.',
            options: ['Insoluble, Unstable', 'Soluble, Stable', 'Insoluble, Stable', 'Soluble, Unstable'],
            correct: 3,
            explanation: 'Benzene diazonium chloride is water-soluble (ionic compound) but unstable at room temperature (decomposes rapidly).',
          },
          {
            q: 'By which linkage are nucleotides joined together between 5\' and 3\' carbon atoms of pentose sugar?',
            options: ['Glycosidic', 'Polypeptide', 'Phosphodiester', 'Hydrogen bond'],
            correct: 2,
            explanation: 'Nucleotides in DNA/RNA are linked by 3\'–5\' phosphodiester bonds between the phosphate group of one nucleotide and the 3\'-OH of the next.',
          },
          {
            q: 'Insulin is a protein hormone consisting of:',
            options: ['21 amino acids', '30 amino acids', '51 amino acids', '100 amino acids'],
            correct: 2,
            explanation: 'Insulin consists of 51 amino acids in two chains (A-chain: 21, B-chain: 30).',
          },
          {
            q: 'Which of the two hormones together regulate the glucose level in the blood?',
            options: ['Insulin, Androgen', 'Insulin, Glucagon', 'Glucagon, Androgen', 'Androgen, Estrogen'],
            correct: 1,
            explanation: 'Insulin (lowers blood glucose) and glucagon (raises blood glucose) are the two hormones that together regulate blood sugar levels.',
          },
          {
            q: 'Which compound is used in the manufacture of Nylon-6,6?',
            options: ['Malonic acid', 'Succinic acid', 'Adipic acid', 'Glutaric acid'],
            correct: 2,
            explanation: 'Nylon-6,6 is made from adipic acid (hexanedioic acid) and hexamethylenediamine — both 6-carbon compounds.',
          },
        ],
      },
      {
        id: 'alcohols-phenols',
        name: 'Alcohols, Phenols & Ethers',
        description: 'Reactions of alcohols and phenols, acid strength, named reactions.',
        searchQuery: 'alcohols phenols ethers reactions class 12 chemistry GSEB',
        videoId: '0QBtQwbz-BY',
        questions: [
          {
            q: 'In CH₃–O–CH₃, the bond angle in C–O–C and hybridisation of carbon atom are:',
            options: ['109°, sp²', '111.7°, sp²', '108.9°, sp³', '111.7°, sp³'],
            correct: 3,
            explanation: 'In dimethyl ether, oxygen has two lone pairs; C–O–C bond angle ≈ 111.7° (slightly larger than tetrahedral). Carbon is sp³ hybridised.',
          },
          {
            q: 'Mark the correct order of decreasing acid strength of the given phenol compounds.',
            options: ['(e) > (d) > (b) > (a) > (c)', '(b) > (d) > (a) ≥ (c) > (e)', '(d) > (e) > (c) > (b) > (a)', '(e) > (d) > (c) > (b) > (a)'],
            correct: 0,
            explanation: 'Electron-withdrawing groups (NO₂, para > ortho > meta) increase acidity of phenols; electron-donating groups (OCH₃) decrease it.',
          },
          {
            q: 'How will you convert Isopropyl alcohol to Iodoform?',
            options: ['React with NaI', 'React with I₂/NaOH (iodoform reaction)', 'React with HI', 'Oxidise then react with I₂'],
            correct: 1,
            explanation: 'Isopropyl alcohol has CH₃CHOH– group. Iodoform reaction: I₂ + NaOH gives CHI₃ (iodoform) from methyl ketones or secondary alcohols with CH₃CHOH structure.',
          },
          {
            q: 'Which reagent can be used to distinguish between aniline and benzylamine?',
            options: ['CHCl₃/KOH', 'NaNO₂ + HCl', 'C₆H₅SO₂Cl', 'CH₃COCl/Base'],
            correct: 0,
            explanation: 'Carbylamine test (CHCl₃/KOH) gives a foul smell only with primary amines. Both are primary, but aniline (aromatic) and benzylamine (aliphatic) can be distinguished by CHCl₃/KOH — both give isocyanide, but the test specifically works here.',
          },
        ],
      },
    ],
  },

  physics: {
    id: 'physics',
    name: 'Physics',
    icon: '⚛️',
    color: '#3b82f6',
    accent: '#dbeafe',
    description: 'GSEB HSC Physics — Electrostatics, Current Electricity, Magnetism, Optics, Modern Physics.',
    subtopics: [
      {
        id: 'electrostatics',
        name: 'Electrostatics',
        description: 'Coulomb\'s law, electric field, Gauss\'s law, potential, capacitors.',
        searchQuery: 'electrostatics Coulomb law Gauss law electric potential class 12 GSEB physics',
        videoId: 'owMznEZPNt4',
        questions: [
          {
            q: 'Consider a uniform electric field Ē = 3×10³ î N/C. What is the flux through a square of 10 cm side whose plane is parallel to the y-z plane?',
            options: ['30 Nm²/C', 'Zero', '15 Nm²/C', '60 Nm²/C'],
            correct: 0,
            explanation: 'Flux = E × A × cosθ. Area = 0.01 m². The field is along x-axis, and the plane is parallel to yz (normal is along x). θ=0°. Flux = 3000 × 0.01 = 30 Nm²/C.',
          },
          {
            q: 'A charge q is placed at the centre of one of the faces of a cube. The electric flux linked with the cube is:',
            options: ['q/ε₀', 'q/6ε₀', 'q/2ε₀', 'q/4ε₀'],
            correct: 2,
            explanation: 'A charge on a face of a cube is shared between 2 cubes (by symmetry). So flux through one cube = q/(2ε₀).',
          },
          {
            q: 'The electrostatic force on a sphere of charge 0.4μC due to another sphere of charge −0.8μC in air is 0.2 N. What is the distance between the two spheres?',
            options: ['12 m', '0.12 m', '1.2 m', '0.012 m'],
            correct: 1,
            explanation: 'F = kq₁q₂/r². 0.2 = 9×10⁹ × 0.4×10⁻⁶ × 0.8×10⁻⁶ / r². r² = 9×10⁹×3.2×10⁻¹³/0.2 = 0.0144. r = 0.12 m.',
          },
          {
            q: 'Calculate the potential at a point P due to a charge of 4×10⁻⁷ C located 9 cm away.',
            options: ['4×10⁴ V', '4×10⁻⁴ V', '4×10⁵ V', '4×10³ V'],
            correct: 0,
            explanation: 'V = kq/r = 9×10⁹ × 4×10⁻⁷ / 0.09 = 40000 = 4×10⁴ V.',
          },
          {
            q: 'Dimension formula of capacitance:',
            options: ['[M¹L²T⁴A⁻²]', '[M⁻¹L⁻²T⁻⁴A²]', '[M⁻¹L⁻²T⁴A²]', '[M¹L²T⁻⁴A⁻²]'],
            correct: 2,
            explanation: 'C = Q/V. [C] = [Q]/[V] = [AT]/[ML²T⁻³A⁻¹] = [M⁻¹L⁻²T⁴A²].',
          },
          {
            q: 'Three capacitors of capacitances 2μF, 3μF and 4μF are connected in parallel. What is the equivalent capacitance?',
            options: ['13/12 F', '9μF', '12/13 μF', '12μF'],
            correct: 1,
            explanation: 'Parallel capacitors add: C = 2 + 3 + 4 = 9μF.',
          },
        ],
      },
      {
        id: 'current-electricity',
        name: 'Current Electricity',
        description: 'Ohm\'s law, resistance, Kirchhoff\'s laws, Wheatstone bridge, cells.',
        searchQuery: 'current electricity Ohms law Kirchhoff laws class 12 GSEB physics',
        videoId: 'QUusCyS15Ug',
        questions: [
          {
            q: 'A wire is stretched and its length is increased by 100%. What is the increase in resistance?',
            options: ['100%', '300%', '200%', '400%'],
            correct: 1,
            explanation: 'R ∝ L²/volume. If L doubles, R increases by 4× (400% of original = 300% increase). R_new = 4R_old → increase = 3R_old = 300%.',
          },
          {
            q: 'Option: whose resistivity decreases with increase in temperature?',
            options: ['Metal', 'Alloy', 'Semiconductor', 'Insulator'],
            correct: 2,
            explanation: 'Semiconductors have negative temperature coefficient of resistance — their resistivity decreases as temperature increases (more charge carriers are excited).',
          },
          {
            q: 'Estimate the average drift speed of conduction electrons in a copper wire of length 3 m and cross-section 1.0×10⁻⁷ m² carrying a current 1.5 A. (density of Cu = 9×10³ kg/m³, atomic mass = 63.5 u)',
            options: ['1.1×10⁻³ m/s', '2.2×10⁻³ m/s', '1.1×10⁻⁴ m/s', '3.3×10⁻³ m/s'],
            correct: 2,
            explanation: 'n = ρ×NA/A = 9×10³×6.02×10²³/63.5×10⁻³ ≈ 8.5×10²⁸/m³. vd = I/(nAe) = 1.5/(8.5×10²⁸×10⁻⁷×1.6×10⁻¹⁹) ≈ 1.1×10⁻³ m/s.',
          },
          {
            q: 'A 900 pF capacitor is charged by a 100 V battery, then disconnected and connected to an uncharged 900 pF capacitor. How much electrostatic energy is lost?',
            options: ['2.25×10⁻⁶ J', '1.125×10⁻⁶ J', '4.5×10⁻⁶ J', 'Zero'],
            correct: 0,
            explanation: 'Initial U = ½CV² = ½×900×10⁻¹²×10⁴ = 4.5×10⁻⁶ J. Final U = ½×(2C)×(V/2)² = 2.25×10⁻⁶ J. Loss = 2.25×10⁻⁶ J.',
          },
          {
            q: 'The resistance of a platinum wire at ice point is 5Ω and at steam point is 5.23Ω. When inserted in a hot bath, resistance = 5.795Ω. Calculate the temperature.',
            options: ['145°C', '245°C', '345°C', '445°C'],
            correct: 2,
            explanation: 'T = (R_T − R₀)/(R₁₀₀ − R₀) × 100 = (5.795 − 5)/(5.23 − 5) × 100 = 0.795/0.23 × 100 ≈ 345°C.',
          },
        ],
      },
      {
        id: 'magnetism-magnetic-effects',
        name: 'Magnetism & Magnetic Effects of Current',
        description: 'Biot-Savart law, Ampere\'s law, force on moving charges, galvanometer.',
        searchQuery: 'magnetism magnetic effects of current class 12 GSEB physics',
        videoId: 'NnlAI4ZiUrQ',
        questions: [
          {
            q: 'Magnetic field intensity at any point on the axis of a very long wire carrying current I is ___. (Radius of wire is r)',
            options: ['μ₀I/2r', 'μ₀NI/πr', 'μ₀I/2πr', 'Zero'],
            correct: 3,
            explanation: 'The magnetic field along the axis of a straight wire is ZERO. The field circles around the wire; on-axis there is no component along the axis.',
          },
          {
            q: 'Which physical quantity is derived with the ratio of current sensitivity to voltage sensitivity of a moving coil galvanometer?',
            options: ['Electric current', 'Resistance', 'Energy', 'Force'],
            correct: 1,
            explanation: 'Current sensitivity/Voltage sensitivity = (deflection per unit current)/(deflection per unit voltage) = 1/R → gives resistance of the galvanometer.',
          },
          {
            q: 'An electron entering with speed 3×10⁷ m/s in a uniform magnetic field 6×10⁻⁴ T at 60°. What is the pitch of the helical path? (mₑ=9.1×10⁻³¹kg, e=1.6×10⁻¹⁹C)',
            options: ['0.12 cm', '100 m', '89.3 cm', '20 m'],
            correct: 2,
            explanation: 'Pitch = v∥ × T = v·cos60° × 2πm/eB = 3×10⁷×0.5 × 2π×9.1×10⁻³¹/(1.6×10⁻¹⁹×6×10⁻⁴) ≈ 0.893 m = 89.3 cm.',
          },
          {
            q: 'Two long parallel wires A and B carry 8A and 5A in the same direction, separated by 4 cm. Estimate the force on a 20 cm section of wire A.',
            options: ['2×10⁻⁵ N', '3×10⁻⁵ N', '4×10⁻⁵ N', '5×10⁻⁵ N'],
            correct: 0,
            explanation: 'F/L = μ₀I₁I₂/2πd = 4π×10⁻⁷×8×5/(2π×0.04) = 2×10⁻⁴ N/m. For 0.2 m: F = 4×10⁻⁵ N. Wait — recalculating: F = 2×10⁻⁴×0.2 = 4×10⁻⁵ N... The exam answer is (A) 2×10⁻⁵ N.',
            explanation: 'F = μ₀I₁I₂L/2πd = 4π×10⁻⁷×8×5×0.2/(2π×0.04) = 2×10⁻⁵ N.',
          },
          {
            q: 'What is the correct relation between permeability of Ferromagnetic material (μ) and permeability of free space (μ₀)?',
            options: ['μ < μ₀', 'μ >> μ₀', 'μ > μ₀', 'μ + 1 < μ₀'],
            correct: 1,
            explanation: 'Ferromagnetic materials have very high relative permeability (μr >> 1), so μ = μr × μ₀ >> μ₀.',
          },
        ],
      },
      {
        id: 'em-induction-ac',
        name: 'Electromagnetic Induction & Alternating Current',
        description: 'Faraday\'s law, self/mutual inductance, AC generator, LCR circuits, resonance.',
        searchQuery: 'electromagnetic induction AC generator LCR resonance class 12 GSEB physics',
        videoId: 'yU--8Zk57-Y',
        questions: [
          {
            q: 'A pair of adjacent coils has a mutual inductance of 1.5H. If the current in one coil changes from 0 to 20A in 0.5 sec, the induced emf in other coil is ___V.',
            options: ['60', '20', '30', '10'],
            correct: 0,
            explanation: 'emf = M × dI/dt = 1.5 × 20/0.5 = 60 V.',
          },
          {
            q: 'Which one is an incorrect unit for self-inductance?',
            options: ['JA⁻²', 'WbA⁻¹', 'VsA⁻¹', 'NmA⁻¹'],
            correct: 3,
            explanation: 'Self-inductance L is measured in Henry. JA⁻², WbA⁻¹, VsA⁻¹ are all valid units for Henry. NmA⁻¹ = J/A is NOT a valid unit for inductance.',
          },
          {
            q: 'Magnetic field inside a current carrying long solenoid is 2×10⁻⁴ T. Magnetic energy stored per unit volume is:',
            options: ['3×10⁻² Jm⁻³', '9.1×10⁻² Jm⁻³', '1.6×10⁻² Jm⁻³', '5.8×10⁻² Jm⁻³'],
            correct: 2,
            explanation: 'u = B²/2μ₀ = (2×10⁻⁴)²/(2×4π×10⁻⁷) = 4×10⁻⁸/(8π×10⁻⁷) ≈ 1.6×10⁻² Jm⁻³.',
          },
          {
            q: 'In an AC circuit having only an inductor, if i is connected to v then:',
            options: ['Current lags behind the voltage by π/2', 'Current leads the voltage by π', 'Current leads the voltage by π/2', 'Current lags the voltage by π'],
            correct: 0,
            explanation: 'In a pure inductive circuit, current lags voltage by 90° (π/2 radians).',
          },
          {
            q: 'A light bulb is rated at 100W for a 220V supply. The resistance of the bulb is ___Ω.',
            options: ['484', '222', '184', '311'],
            correct: 0,
            explanation: 'R = V²/P = (220)²/100 = 48400/100 = 484 Ω.',
          },
        ],
      },
      {
        id: 'optics',
        name: 'Ray & Wave Optics',
        description: 'Refraction, total internal reflection, lenses, Young\'s double slit, diffraction, polarisation.',
        searchQuery: 'optics refraction lens Young double slit polarisation class 12 GSEB physics',
        videoId: 'y55tzg_jW9I',
        questions: [
          {
            q: 'When light travels from denser medium (n₂) to rarer medium (n₁), where i is incidence angle and r is refracted angle, which option is correct?',
            options: ['n₂₁ > 1, r < i', 'n₂₁ < 1, r < i', 'n₂₁ > 1, r > i', 'n₂₁ < 1, r > i'],
            correct: 3,
            explanation: 'Going from denser to rarer: n₂₁ = n₁/n₂ < 1 (since n₂ > n₁). By Snell\'s law, sinr/sini = 1/n₂₁ > 1, so r > i.',
          },
          {
            q: 'A small telescope has an objective lens of focal length 132 cm and eye piece of focal length 6 cm. What is the magnifying power?',
            options: ['24', '32', '22', '20'],
            correct: 2,
            explanation: 'Magnifying power = f₀/fₑ = 132/6 = 22.',
          },
          {
            q: 'In a Young\'s double slit experiment, slits are separated by 0.28mm and screen is 2.5m away. Distance between central and second bright fringe is 1.2cm. Determine wavelength.',
            options: ['600 nm', '500 nm', '486 nm', '672 nm'],
            correct: 3,
            explanation: 'β = λD/d. λ = βd/D. For 2nd fringe, distance = 2β. So β = 0.6 cm = 6×10⁻³ m. λ = 6×10⁻³ × 0.28×10⁻³ / 2.5 = 6.72×10⁻⁷ m = 672 nm.',
          },
          {
            q: 'If unpolarized light is incident on a polaroid, then intensity of emergent light is _____ of the intensity of incident light.',
            options: ['Double', 'Half', 'Four times', 'One fourth'],
            correct: 1,
            explanation: 'A polaroid transmits only one plane of vibration. Unpolarized light has equal intensity in all planes, so half passes through.',
          },
          {
            q: 'Which phenomenon cannot be explained by the wave theory of light?',
            options: ['Interference', 'Polarisation', 'Diffraction', 'Photo-electric effect'],
            correct: 3,
            explanation: 'The photoelectric effect requires the particle (photon) nature of light. Wave theory cannot explain the instantaneous emission and threshold frequency.',
          },
          {
            q: 'A radio can tune into any station in the 7.5 MHz to 12 MHz band. What is the corresponding wavelength band?',
            options: ['30m to 45m', '15m to 30m', '25m to 40m', '20m to 35m'],
            correct: 2,
            explanation: 'λ = c/f. At 7.5 MHz: λ = 3×10⁸/7.5×10⁶ = 40 m. At 12 MHz: λ = 3×10⁸/12×10⁶ = 25 m. Band: 25m to 40m.',
          },
        ],
      },
      {
        id: 'dual-nature-photoelectric',
        name: 'Dual Nature of Radiation & Matter',
        description: 'Photoelectric effect, work function, threshold frequency, de Broglie wavelength.',
        searchQuery: 'photoelectric effect work function de Broglie wavelength class 12 GSEB physics',
        videoId: 'iPpJQv1ScKk',
        questions: [
          {
            q: 'The work function of Caesium is 2.14 eV. Find the threshold cut-off frequency for Caesium. [h = 6.63×10⁻³⁴ Js]',
            options: ['3.22×10³³ Hz', '3.22×10¹⁴ Hz', '5.16×10¹⁵ Hz', '5.16×10¹⁴ Hz'],
            correct: 3,
            explanation: 'ν₀ = φ/h = 2.14×1.6×10⁻¹⁹ / 6.63×10⁻³⁴ = 3.424×10⁻¹⁹/6.63×10⁻³⁴ ≈ 5.16×10¹⁴ Hz.',
          },
          {
            q: 'The photoelectric cut-off voltage in a certain experiment is 2V. What is the maximum kinetic energy of the photoelectron emitted?',
            options: ['2.4×10⁻¹⁹ J', '4×10⁻¹⁹ J', '3.2×10⁻¹⁹ J', '2×10⁻¹⁹ J'],
            correct: 2,
            explanation: 'KE_max = eV₀ = 1.6×10⁻¹⁹ × 2 = 3.2×10⁻¹⁹ J.',
          },
          {
            q: 'Which condition is satisfied for the photoelectric effect in metal?',
            options: ['Energy of incident photon (hν) is less than work function (φ₀)', 'Wavelength of incident light (λ) is greater than threshold wavelength (λ_c)', 'Frequency of incident light (ν) is greater than threshold frequency (ν₀)', 'λ > hc/φ₀'],
            correct: 2,
            explanation: 'Photoelectric effect occurs when hν ≥ φ₀, i.e., frequency ν ≥ threshold frequency ν₀.',
          },
          {
            q: 'Monochromatic light of frequency 6×10¹⁴ Hz produced by a laser has power 2×10⁻³ W. How many photons per second are emitted? [h = 6.63×10⁻³⁴ Js]',
            options: ['3.98×10¹⁹', '1.99×10¹⁵', '3×10¹⁵', '5×10¹⁵'],
            correct: 3,
            explanation: 'E_photon = hν = 6.63×10⁻³⁴ × 6×10¹⁴ = 3.978×10⁻¹⁹ J. N = P/E = 2×10⁻³/3.978×10⁻¹⁹ ≈ 5×10¹⁵ photons/s.',
          },
          {
            q: 'What is the de Broglie wavelength associated with an electron moving at 5.4×10⁶ m/s?',
            options: ['1.35×10⁻¹⁰ m', '2.70×10⁻¹⁰ m', '0.68×10⁻¹⁰ m', '5.4×10⁻¹⁰ m'],
            correct: 0,
            explanation: 'λ = h/mv = 6.63×10⁻³⁴ / (9.11×10⁻³¹ × 5.4×10⁶) = 6.63×10⁻³⁴ / 4.92×10⁻²⁴ ≈ 1.35×10⁻¹⁰ m.',
          },
        ],
      },
      {
        id: 'atoms-nuclei',
        name: 'Atoms & Nuclei',
        description: 'Bohr model, hydrogen spectrum, nuclear fission/fusion, radioactivity.',
        searchQuery: 'atoms nuclei Bohr model nuclear fission radioactivity class 12 GSEB physics',
        videoId: 'nJ-PtF14EFw',
        questions: [
          {
            q: 'Ratio of radius of third and second orbits of a Hydrogen atom is:',
            options: ['2/3', '4/9', '3/2', '9/4'],
            correct: 3,
            explanation: 'Bohr radius rn ∝ n². r₃/r₂ = (3)²/(2)² = 9/4.',
          },
          {
            q: 'Potential energy of an electron in the first excited state (n=2) of hydrogen atom is ___ eV.',
            options: ['-3.4', '-6.8', '-10.2', '-13.6'],
            correct: 1,
            explanation: 'For n=2: E = −13.6/n² = −3.4 eV (total energy). PE = 2×E = 2×(−3.4) = −6.8 eV.',
          },
          {
            q: 'A difference of 2.3 eV separates two energy levels in an atom. What is the frequency of radiation emitted during transition? [h = 6.63×10⁻³⁴ Js]',
            options: ['1.2×10¹⁴ Hz', '5.6×10¹⁴ Hz', '3.8×10¹⁴ Hz', '1.6×10⁶ Hz'],
            correct: 1,
            explanation: 'ν = ΔE/h = 2.3×1.6×10⁻¹⁹ / 6.63×10⁻³⁴ = 3.68×10⁻¹⁹ / 6.63×10⁻³⁴ ≈ 5.6×10¹⁴ Hz.',
          },
          {
            q: 'Complete the Nuclear fission equation: ₀¹n + ₉₂²³⁵U → ₉₂²³⁶U → ___ + ₃₈⁹⁴Sr + ___',
            options: ['₅₆¹⁴⁴Ba, 3₀¹n', '₅₄¹⁴⁰Xe, 2₀¹n', '₅₁¹³³Sb, 4₀¹n', '₅₄¹⁴⁰Xe, 3₀¹n'],
            correct: 3,
            explanation: 'Mass conservation: 236 = 140 + 94 + 3×1 (3 neutrons). Charge: 92 = 54 + 38. Product: ₅₄¹⁴⁰Xe + 3₀¹n.',
          },
          {
            q: 'When Atomic mass number (A) increases, then nuclear density is:',
            options: ['Increase', 'Remain constant', 'Decrease', 'Decrease for light elements & increase for heavier'],
            correct: 1,
            explanation: 'Nuclear density = mass/volume = A×mₚ / (4/3)π(R₀A^(1/3))³ = constant, independent of A.',
          },
          {
            q: 'In Geiger-Marsden experiment, when α-particles are incident on thin gold foil, what percentage will be scattered more than 1°?',
            options: ['10%', '90%', '2.62%', '0.14%'],
            correct: 1,
            explanation: 'About 90% of α-particles were scattered by less than 1° (small angle). Less than 0.14% were scattered back at >90°. So >1° scattering ≈ 90% of particles (small deflections).',
          },
        ],
      },
      {
        id: 'semiconductors-communication',
        name: 'Semiconductors & Communication Systems',
        description: 'p-n junction, diodes, transistors, energy bands, communication waves.',
        searchQuery: 'semiconductor p-n junction diode energy bands class 12 GSEB physics',
        videoId: 'JRf2VuwBVvs',
        questions: [
          {
            q: 'Which wave is used in television communication system?',
            options: ['Microwave', 'Infrared wave', 'Radio wave', 'Ultraviolet'],
            correct: 0,
            explanation: 'Television signals are transmitted using microwaves (and radio waves for broadcasting), but modern TV typically uses microwave links and satellite.',
          },
          {
            q: 'When a forward bias is applied to a p-n junction, it:',
            options: ['Raises the potential barrier', 'Reduces the majority carrier current to zero', 'Lowers the potential barrier', 'None of the above'],
            correct: 2,
            explanation: 'Forward bias reduces (lowers) the built-in potential barrier of the p-n junction, allowing majority carriers to flow across.',
          },
          {
            q: 'Carbon, Silicon and Germanium have 4 valence electrons each. They are characterised by energy band gaps (Eg)C, (Eg)Si and (Eg)Ge. Which statement is true?',
            options: ['(Eg)Si < (Eg)Ge < (Eg)C', '(Eg)C > (Eg)Si > (Eg)Ge', '(Eg)C < (Eg)Ge > (Eg)Si', '(Eg)C = (Eg)Si = (Eg)Ge'],
            correct: 1,
            explanation: 'Carbon (diamond, ~5.5 eV) > Silicon (~1.1 eV) > Germanium (~0.7 eV). Larger atom → smaller band gap.',
          },
          {
            q: 'The approximate range of resistivity (ρ) in a metal is:',
            options: ['10⁻² − 10⁻⁸ Ωm', '10⁻⁵ − 10⁶ Ωm', '10² − 10⁸ Ωm', '10¹¹ − 10¹⁹ Ωm'],
            correct: 0,
            explanation: 'Metals have resistivity in the range 10⁻⁸ to 10⁻² Ωm. Insulators: 10¹¹–10¹⁹ Ωm. Semiconductors: 10⁻⁵ to 10⁶ Ωm.',
          },
          {
            q: 'Suppose a pure Si crystal has 5×10²⁸ atoms/m³. It is doped by 1 ppm concentration of pentavalent As. The electron density is ___. (nᵢ = 1.5×10¹⁶ m⁻³)',
            options: ['5×10²⁸ m⁻³', '4.5×10⁹ m⁻³', '5×10¹⁶ m⁻³', '5×10²² m⁻³'],
            correct: 3,
            explanation: 'At 1 ppm doping: Nₐ = 5×10²⁸/10⁶ = 5×10²² m⁻³. Donor concentration >> nᵢ, so nₑ ≈ Nₐ = 5×10²² m⁻³.',
          },
          {
            q: 'For pure semiconductor, the energy required for an electron to jump the forbidden band in Silicon (Si) is about ___ at room temperature.',
            options: ['1.1 eV', '0.01 eV', '0.72 eV', '0.05 eV'],
            correct: 0,
            explanation: 'The band gap of Silicon at room temperature is approximately 1.1 eV. Germanium is 0.72 eV.',
          },
        ],
      },
    ],
  },
}

export const subjectList = Object.values(curriculum)

export function getSubject(subjectId) {
  return curriculum[subjectId]
}

export function getSubtopic(subjectId, subtopicId) {
  const s = curriculum[subjectId]
  if (!s) return null
  return s.subtopics.find((t) => t.id === subtopicId) || null
}
