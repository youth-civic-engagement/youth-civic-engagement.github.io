// Federal candidates identified in the 119th Congress full-text sweep.
// These classifications are provisional pending final editorial review.
// Classifications last reviewed: 2026-08-21
// Legislative actions and committees refreshed from GovInfo BILLSTATUS: 2026-08-26

const billsData = [
  {
    id: 'us/education-HR455', state: 'US', stateName: 'Federal', billNumber: 'H.R. 455',
    title: 'Protecting Higher Education from Foreign Threats Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'education', reviewStatus: 'Provisional',
    target: 'College instructors receiving funding from the Chinese Communist Party and the institutions employing them.',
    restrictions: 'Loss of all federal funding to an institution during an award year in which it employs a covered instructor.',
    summary: 'Conditions an institution’s federal funding on not employing an instructor who receives Chinese Communist Party funding.',
    civilRightsImpact: 'The employment consequence can reach citizens and lawful permanent residents because the bill contains no citizenship or LPR exemption. The restriction is indirect and affiliation-based, so it requires final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/455',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/455/text',
    introducedDate: '2025-01-15', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR458', state: 'US', stateName: 'Federal', billNumber: 'H.R. 458',
    title: 'Protecting our Land Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Foreign adversaries, their agents, and persons controlled by or affiliated with them.',
    restrictions: 'Acquisition of U.S. real estate.',
    summary: 'Restricts U.S. real-estate purchases by foreign adversaries and covered agents, controlled persons, and affiliated persons.',
    civilRightsImpact: 'The individual coverage has no express citizen or LPR exemption. Because some coverage depends on agency or affiliation rather than nationality, final scope review is needed.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/458',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/458/text',
    introducedDate: '2025-01-15', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR809', state: 'US', stateName: 'Federal', billNumber: 'H.R. 809',
    title: 'Securing America’s Land from Foreign Interference Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Members of the Chinese Communist Party.',
    restrictions: 'Purchase of U.S. real estate.',
    summary: 'Bars members of the Chinese Communist Party from purchasing real estate in the United States.',
    civilRightsImpact: 'No citizenship or lawful-permanent-resident exemption appears in the operative restriction, so it can reach individuals already settled in the United States.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/809',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/809/text',
    introducedDate: '2025-01-28', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-S176', state: 'US', stateName: 'Federal', billNumber: 'S. 176',
    title: 'Not One More Inch or Acre Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Citizens of the People’s Republic of China.',
    restrictions: 'Acquisition of U.S. real estate and divestment of certain existing holdings.',
    summary: 'Bars PRC citizens from acquiring real estate in the United States and establishes divestment rules.',
    civilRightsImpact: 'Refugees and asylees are excepted, but lawful permanent residents are not excepted from the new-purchase prohibition. Existing LPR-owned personal-use property receives narrower protection.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/176',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/176/text',
    introducedDate: '2025-01-22', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR1575', state: 'US', stateName: 'Federal', billNumber: 'H.R. 1575',
    title: 'No American Land for Communist China Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Agents of the government of the People’s Republic of China.',
    restrictions: 'Purchase of land adjacent to covered federal land.',
    summary: 'Bars PRC government agents from purchasing land adjacent to covered federal property.',
    civilRightsImpact: 'The restriction applies to individuals without an express citizen or LPR exemption, although its agency test makes this an affiliation-based candidate.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/1575',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/1575/text',
    introducedDate: '2025-02-25', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-S715', state: 'US', stateName: 'Federal', billNumber: 'S. 715',
    title: 'No American Land for Communist China Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Agents of the government of the People’s Republic of China.',
    restrictions: 'Purchase of land adjacent to covered federal land.',
    summary: 'Senate companion to H.R. 1575, barring PRC government agents from purchasing land adjacent to covered federal property.',
    civilRightsImpact: 'The restriction applies to individuals without an express citizen or LPR exemption, although its agency test makes this an affiliation-based candidate.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/715',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/715/text',
    introducedDate: '2025-02-25', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR4706', state: 'US', stateName: 'Federal', billNumber: 'H.R. 4706',
    title: 'Protecting Our Farms and Homes from China Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Covered PRC- and CCP-affiliated persons, including certain individuals and corporate officials.',
    restrictions: 'Acquisition and continued ownership of agricultural and residential property.',
    penalties: 'Divestment, civil fines, and potential imprisonment.',
    summary: 'Creates agricultural and residential property restrictions for covered PRC- and CCP-connected persons.',
    civilRightsImpact: 'Individual provisions lack an express citizen or LPR exemption, but much of the coverage depends on government, party, or corporate affiliation and requires final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/4706',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/4706/text',
    introducedDate: '2025-07-23', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-S2258', state: 'US', stateName: 'Federal', billNumber: 'S. 2258',
    title: 'Protecting Our Farms and Homes from China Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Covered PRC- and CCP-affiliated persons, including certain individuals and corporate officials.',
    restrictions: 'Acquisition and continued ownership of agricultural and residential property.',
    penalties: 'Divestment, civil fines, and potential imprisonment.',
    summary: 'Senate companion to H.R. 4706, creating property restrictions for covered PRC- and CCP-connected persons.',
    civilRightsImpact: 'Individual provisions lack an express citizen or LPR exemption, but much of the coverage depends on government, party, or corporate affiliation and requires final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/2258',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/2258/text',
    introducedDate: '2025-07-10', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/education-S1972', state: 'US', stateName: 'Federal', billNumber: 'S. 1972',
    title: 'Bioweapon Prevention Act of 2025', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'research', reviewStatus: 'Provisional',
    target: 'Nationals of China, Hong Kong, Macau, and other covered countries conducting agricultural research.',
    restrictions: 'Federal funding for laboratories and research centers employing covered researchers.',
    summary: 'Denies federal funding to a laboratory or research center where a covered-country national conducts agricultural research.',
    civilRightsImpact: 'The nationality rule has no citizen or LPR exemption and can effectively exclude covered researchers from employment, although the legal sanction is imposed on the institution.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/1972',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/1972/text',
    introducedDate: '2025-06-05', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-S2574', state: 'US', stateName: 'Federal', billNumber: 'S. 2574',
    title: 'Prohibition of Agricultural Land for Foreign Adversaries Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Individuals and entities associated with the governments of foreign adversaries, including the PRC.',
    restrictions: 'Agricultural land ownership and participation in USDA programs.',
    summary: 'Restricts agricultural land ownership and USDA program participation by persons associated with foreign-adversary governments.',
    civilRightsImpact: 'The individual coverage contains no express citizen or LPR exemption, though the government-association test requires final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/2574',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/2574/text',
    introducedDate: '2025-07-31', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/employment-S2986', state: 'US', stateName: 'Federal', billNumber: 'S. 2986',
    title: 'American Medicine Safety and Security Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'employment', reviewStatus: 'Provisional',
    target: 'Nationals of China, Russia, Iran, and North Korea, including FDA applicants and employees with covered immediate-family connections.',
    restrictions: 'FDA employment and access to certain information or systems.',
    summary: 'Bars nationals of specified countries from FDA employment and uses immediate-family nationality in access restrictions.',
    civilRightsImpact: 'The nationality restrictions contain no LPR exemption and can therefore exclude lawful permanent residents from federal employment or access.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/2986',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/2986/text',
    introducedDate: '2025-10-08', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/civic-HR6581', state: 'US', stateName: 'Federal', billNumber: 'H.R. 6581',
    title: 'Safeguarding U.S. Rulemaking Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'civic', reviewStatus: 'Provisional',
    target: 'Nationals of foreign adversaries.',
    restrictions: 'Submitting comments in federal rulemaking proceedings or petitioning federal agencies.',
    summary: 'Makes nationals of foreign adversaries ineligible to submit federal rulemaking comments or petitions to agencies.',
    civilRightsImpact: 'The restriction is based on nationality and contains no citizen or LPR exemption, potentially excluding settled residents from ordinary civic participation.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/6581',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/6581/text',
    introducedDate: '2025-12-10', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/civic-S3416', state: 'US', stateName: 'Federal', billNumber: 'S. 3416',
    title: 'Safeguarding US Rulemaking Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'civic', reviewStatus: 'Provisional',
    target: 'Nationals of foreign adversaries.',
    restrictions: 'Submitting comments in federal rulemaking proceedings or petitioning federal agencies.',
    summary: 'Senate companion to H.R. 6581, excluding foreign-adversary nationals from federal rulemaking comments and agency petitions.',
    civilRightsImpact: 'The restriction is based on nationality and contains no citizen or LPR exemption, potentially excluding settled residents from ordinary civic participation.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/3416',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/3416/text',
    introducedDate: '2025-12-10', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR8387', state: 'US', stateName: 'Federal', billNumber: 'H.R. 8387',
    title: 'Measures Against Marxism’s Dangerous Adherents and Noxious Islamists Act of 2026', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Aliens associated with specified ideologies or organizations, including forms of Chinese communist advocacy, membership, or affiliation.',
    restrictions: 'Admission, continued immigration status, and naturalization.',
    summary: 'Adds inadmissibility, deportability, and naturalization consequences for specified advocacy, membership, and affiliation.',
    civilRightsImpact: 'The deportability and naturalization provisions can reach lawful permanent residents. Coverage is ideology- and affiliation-based rather than solely nationality-based.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/8387',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/8387/text',
    introducedDate: '2026-04-20', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR8700', state: 'US', stateName: 'Federal', billNumber: 'H.R. 8700',
    title: 'Protecting U.S. Farmland and Sensitive Sites From Foreign Adversaries Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Foreign-adversary persons involved in covered U.S. real-estate transactions.',
    restrictions: 'Mandatory CFIUS declarations and a presumption of unresolvable national-security risk.',
    summary: 'Expands CFIUS review of foreign-adversary-person real estate and creates a strong presumption against covered transactions.',
    civilRightsImpact: 'No express LPR exemption appears, but this is a review presumption rather than a categorical individual ban and therefore needs final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/8700',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/8700/text',
    introducedDate: '2026-05-07', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR8906', state: 'US', stateName: 'Federal', billNumber: 'H.R. 8906',
    title: 'Ban Chinese Communist and Islamist Home Ownership Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Citizens of covered foreign countries who are not also U.S. citizens.',
    restrictions: 'Purchase and continued ownership of residential property.',
    penalties: 'Required divestiture of covered housing interests.',
    summary: 'Bars covered foreign citizens from purchasing homes and requires divestiture of covered residential property.',
    civilRightsImpact: 'Lawful permanent residents remain covered because the exemption is limited to U.S. citizens.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/8906',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/8906/text',
    introducedDate: '2026-05-19', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/employment-HR9079', state: 'US', stateName: 'Federal', billNumber: 'H.R. 9079',
    title: 'TRUST Act', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'employment', reviewStatus: 'Provisional',
    target: 'Nationals of covered nations seeking to enlist in the U.S. Armed Forces.',
    restrictions: 'Future military enlistment.',
    summary: 'Prohibits nationals of covered nations from future enlistment in the U.S. military.',
    civilRightsImpact: 'The bill’s reporting language expressly counts lawful permanent resident service members, confirming that the nationality restriction can affect LPRs.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/9079',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/9079/text',
    introducedDate: '2026-05-29', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR9249', state: 'US', stateName: 'Federal', billNumber: 'H.R. 9249',
    title: 'No PLA Employees Act of 2026', tier: 1,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Aliens currently or formerly employed by specified Chinese military companies or institutions.',
    restrictions: 'Admission to the United States and continued immigration status.',
    penalties: 'Inadmissibility and deportability.',
    summary: 'Makes covered current and former employees of specified Chinese military-linked organizations inadmissible and deportable.',
    civilRightsImpact: 'The deportability provision can reach lawful permanent residents, although coverage turns on employment history rather than Chinese origin alone.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/9249',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/9249/text',
    introducedDate: '2026-06-10', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR460', state: 'US', stateName: 'Federal', billNumber: 'H.R. 460',
    title: 'CCP Visa Disclosure Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Applicants for and holders of F, J, and M visas who receive PRC government or CCP funding.',
    restrictions: 'Disclosure requirements and continued visa eligibility.',
    penalties: 'Visa revocation for noncompliance.',
    summary: 'Requires covered student and exchange visa applicants and holders to disclose PRC government or CCP funding.',
    civilRightsImpact: 'Directly burdens visa applicants and visa holders through China-specific disclosure and revocation provisions.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/460',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/460/text',
    introducedDate: '2025-01-15', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-S108', state: 'US', stateName: 'Federal', billNumber: 'S. 108',
    title: 'Protecting Higher Education from the Chinese Communist Party Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Chinese Communist Party members and a broadly defined group of their family members.',
    restrictions: 'Eligibility for F and J visas.',
    summary: 'Bars CCP members and specified family members from student and exchange visas.',
    civilRightsImpact: 'The measure directly restricts nonimmigrant visa eligibility based on political affiliation and family relationship.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/108',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/108/text',
    introducedDate: '2025-01-16', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR1438', state: 'US', stateName: 'Federal', billNumber: 'H.R. 1438',
    title: 'Protecting America’s Agricultural Land from Foreign Harm Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Persons subject to the jurisdiction of China and other covered countries, excluding U.S. citizens and LPRs.',
    restrictions: 'Agricultural land ownership and USDA program participation.',
    summary: 'Restricts agricultural land and USDA benefits for persons subject to covered-country jurisdiction.',
    civilRightsImpact: 'The express citizen and LPR exemptions place affected nonimmigrant visa holders and nonresidents in Tier 2.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/1438',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/1438/text',
    introducedDate: '2025-02-18', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-S618', state: 'US', stateName: 'Federal', billNumber: 'S. 618',
    title: 'Protecting America’s Agricultural Land from Foreign Harm Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Persons subject to the jurisdiction of China and other covered countries, excluding U.S. citizens and LPRs.',
    restrictions: 'Agricultural land ownership and USDA program participation.',
    summary: 'Senate companion to H.R. 1438, restricting agricultural land and USDA benefits for covered persons.',
    civilRightsImpact: 'The express citizen and LPR exemptions place affected nonimmigrant visa holders and nonresidents in Tier 2.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/618',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/618/text',
    introducedDate: '2025-02-18', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR2147', state: 'US', stateName: 'Federal', billNumber: 'H.R. 2147',
    title: 'Stop CCP VISAs Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Nationals of the People’s Republic of China seeking F, J, or M visas.',
    restrictions: 'Student, exchange, and vocational visa eligibility.',
    summary: 'Categorically bars PRC nationals from receiving F, J, and M visas for study or research.',
    civilRightsImpact: 'The restriction directly excludes Chinese students, researchers, and exchange visitors based on nationality.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/2147',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/2147/text',
    introducedDate: '2025-03-14', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-S1086', state: 'US', stateName: 'Federal', billNumber: 'S. 1086',
    title: 'Stop CCP VISAs Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Nationals of the People’s Republic of China seeking F, J, or M visas.',
    restrictions: 'Student, exchange, and vocational visa eligibility.',
    summary: 'Senate companion to H.R. 2147, categorically barring PRC nationals from F, J, and M visas.',
    civilRightsImpact: 'The restriction directly excludes Chinese students, researchers, and exchange visitors based on nationality.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/1086',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/1086/text',
    introducedDate: '2025-03-14', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/property-HR3618', state: 'US', stateName: 'Federal', billNumber: 'H.R. 3618',
    title: 'American Land and Property Protection Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'property', reviewStatus: 'Provisional',
    target: 'Nonresident aliens, foreign businesses, and agents associated with listed adversary governments.',
    restrictions: 'Purchase of U.S. real estate.',
    summary: 'Bars covered nonresident aliens, businesses, and agents from purchasing real estate in the United States.',
    civilRightsImpact: 'Its individual restriction is limited to nonresident aliens, placing it in Tier 2, though some coverage is affiliation-based.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/3618',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/3618/text',
    introducedDate: '2025-05-29', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/education-S1010', state: 'US', stateName: 'Federal', billNumber: 'S. 1010',
    title: 'CAMPUS Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'education', reviewStatus: 'Provisional',
    target: 'Students and employees of listed PRC military-civil-fusion institutions.',
    restrictions: 'Eligibility for F and J visas.',
    summary: 'Authorizes denial of student and exchange visas to people associated with listed PRC institutions.',
    civilRightsImpact: 'The measure directly affects students and researchers seeking nonimmigrant visas, based on institutional affiliation.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/1010',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/1010/text',
    introducedDate: '2025-03-12', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR3725', state: 'US', stateName: 'Federal', billNumber: 'H.R. 3725',
    title: 'Preventing the Abuse of Immigration Parole Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Nationals of countries of concern, including China, seeking immigration parole.',
    restrictions: 'Eligibility for parole into the United States.',
    summary: 'Bars parole for nationals of countries of concern unless the Department of State grants a waiver.',
    civilRightsImpact: 'The operative rule distinguishes prospective parolees by nationality and directly affects admission to the United States.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/3725',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/3725/text',
    introducedDate: '2025-06-04', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/education-HR6487', state: 'US', stateName: 'Federal', billNumber: 'H.R. 6487',
    title: 'SECURE STEM Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'research', reviewStatus: 'Provisional',
    target: 'Nationals of China and other listed countries who are not U.S. citizens or LPRs.',
    restrictions: 'Specified visas and employment, admission, or assignment at national laboratories.',
    summary: 'Denies specified visas and national-laboratory access or employment to nationals of covered countries.',
    civilRightsImpact: 'The bill expressly excludes U.S. citizens and lawful permanent residents, leaving nonimmigrant visa holders and applicants directly affected.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/6487',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/6487/text',
    introducedDate: '2025-12-05', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR7780', state: 'US', stateName: 'Federal', billNumber: 'H.R. 7780',
    title: 'One Nation, One Visa Policy Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Nationals of the PRC, Hong Kong, and Macau seeking admission without a visa.',
    restrictions: 'Visa-free admission to the United States.',
    summary: 'Requires PRC, Hong Kong, and Macau nationals to hold a valid visa rather than using visa-free admission.',
    civilRightsImpact: 'The admission requirement directly differentiates among travelers based on nationality.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/7780',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/7780/text',
    introducedDate: '2026-03-03', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-S3857', state: 'US', stateName: 'Federal', billNumber: 'S. 3857',
    title: 'One Nation, One Visa Policy Act', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Nationals of the PRC, Hong Kong, and Macau seeking admission without a visa.',
    restrictions: 'Visa-free admission to the United States.',
    summary: 'Senate companion to H.R. 7780, requiring covered nationals to hold a valid visa.',
    civilRightsImpact: 'The admission requirement directly differentiates among travelers based on nationality.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/3857',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/3857/text',
    introducedDate: '2026-02-12', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/education-S929', state: 'US', stateName: 'Federal', billNumber: 'S. 929',
    title: 'GATE Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'research', reviewStatus: 'Provisional',
    target: 'Covered foreign nationals, including nationals of China, who are not U.S. citizens or LPRs.',
    restrictions: 'Visitor, assignee, and other access to Department of Energy national laboratories.',
    summary: 'Bars covered foreign nationals from national-laboratory visitor or assignee access.',
    civilRightsImpact: 'The bill expressly excludes U.S. citizens and lawful permanent residents, placing affected researchers and visitors in Tier 2.',
    url: 'https://www.congress.gov/bill/119th-congress/senate-bill/929',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/senate-bill/929/text',
    introducedDate: '2025-03-11', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/education-HR10092', state: 'US', stateName: 'Federal', billNumber: 'H.R. 10092',
    title: 'GATE Act of 2026', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'research', reviewStatus: 'Provisional',
    target: 'Covered foreign nationals, including nationals of China, who are not U.S. citizens or LPRs.',
    restrictions: 'Visitor, assignee, and other access to Department of Energy national laboratories.',
    summary: 'House companion to S. 929, barring covered foreign nationals from national-laboratory access.',
    civilRightsImpact: 'The bill expressly excludes U.S. citizens and lawful permanent residents, placing affected researchers and visitors in Tier 2.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/10092',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/10092/text',
    introducedDate: '2026-08-13', lastUpdated: '2026-08-21'
  },
  {
    id: 'us/immigration-HR6225', state: 'US', stateName: 'Federal', billNumber: 'H.R. 6225',
    title: 'PAUSE Act of 2025', tier: 2,
    status: 'PENDING', session: '119th Congress', category: 'immigration', reviewStatus: 'Provisional',
    target: 'Specified visa applicants and CCP members or associates seeking lawful immigration status.',
    restrictions: 'Visa issuance, entry, and adjustment to lawful immigration status.',
    summary: 'Creates a broad visa and status moratorium and bars specified CCP members and associates from lawful status.',
    civilRightsImpact: 'The proposal directly affects visa holders and applicants; existing lawful permanent residents are not directly stripped of status. Its breadth and affiliation rules require final scope review.',
    url: 'https://www.congress.gov/bill/119th-congress/house-bill/6225',
    officialUrl: 'https://www.congress.gov/bill/119th-congress/house-bill/6225/text',
    introducedDate: '2025-11-20', lastUpdated: '2026-08-21'
  }
];

const federalBillMetadata = {
  'H.R. 455': {
    actionDate: '2025-01-15',
    latestAction: 'Referred to the House Committee on Education and Workforce.',
    committee: 'Education and Workforce Committee'
  },
  'H.R. 458': {
    actionDate: '2025-01-15',
    latestAction: 'Referred to the House Committee on Foreign Affairs.',
    committee: 'Foreign Affairs Committee'
  },
  'H.R. 809': {
    actionDate: '2025-01-28',
    latestAction: 'Referred to the House Committee on Foreign Affairs.',
    committee: 'Foreign Affairs Committee'
  },
  'S. 176': {
    actionDate: '2025-01-22',
    latestAction: 'Read twice and referred to the Committee on Foreign Relations.',
    committee: 'Foreign Relations Committee'
  },
  'H.R. 1575': {
    actionDate: '2025-02-25',
    latestAction: 'Referred to the House Committee on Foreign Affairs.',
    committee: 'Foreign Affairs Committee',
    proposalFamily: 'no-american-land-for-communist-china-act'
  },
  'S. 715': {
    actionDate: '2025-02-25',
    latestAction: 'Read twice and referred to the Committee on Foreign Relations.',
    committee: 'Foreign Relations Committee',
    proposalFamily: 'no-american-land-for-communist-china-act'
  },
  'H.R. 4706': {
    actionDate: '2025-07-23',
    latestAction: 'Referred to the Committee on Agriculture, and in addition to the Committee on Foreign Affairs, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
    committee: 'Agriculture Committee; Foreign Affairs Committee',
    proposalFamily: 'protecting-our-farms-and-homes-from-china-act'
  },
  'S. 2258': {
    actionDate: '2025-07-10',
    latestAction: 'Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry.',
    committee: 'Agriculture, Nutrition, and Forestry Committee',
    proposalFamily: 'protecting-our-farms-and-homes-from-china-act'
  },
  'S. 1972': {
    actionDate: '2025-06-05',
    latestAction: 'Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry.',
    committee: 'Agriculture, Nutrition, and Forestry Committee'
  },
  'S. 2574': {
    actionDate: '2025-07-31',
    latestAction: 'Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry.',
    committee: 'Agriculture, Nutrition, and Forestry Committee'
  },
  'S. 2986': {
    actionDate: '2025-10-08',
    latestAction: 'Read twice and referred to the Committee on Health, Education, Labor, and Pensions.',
    committee: 'Health, Education, Labor, and Pensions Committee'
  },
  'H.R. 6581': {
    actionDate: '2025-12-10',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee',
    proposalFamily: 'safeguarding-us-rulemaking-act'
  },
  'S. 3416': {
    actionDate: '2025-12-10',
    latestAction: 'Read twice and referred to the Committee on Homeland Security and Governmental Affairs.',
    committee: 'Homeland Security and Governmental Affairs Committee',
    proposalFamily: 'safeguarding-us-rulemaking-act'
  },
  'H.R. 8387': {
    actionDate: '2026-04-20',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  },
  'H.R. 8700': {
    actionDate: '2026-05-07',
    latestAction: 'Referred to the Committee on Financial Services, and in addition to the Committees on Foreign Affairs, and Energy and Commerce, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
    committee: 'Financial Services Committee; Foreign Affairs Committee; Energy and Commerce Committee'
  },
  'H.R. 8906': {
    actionDate: '2026-05-19',
    latestAction: 'Referred to the House Committee on Foreign Affairs.',
    committee: 'Foreign Affairs Committee'
  },
  'H.R. 9079': {
    actionDate: '2026-05-29',
    latestAction: 'Referred to the House Committee on Armed Services.',
    committee: 'Armed Services Committee'
  },
  'H.R. 9249': {
    actionDate: '2026-06-10',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  },
  'H.R. 460': {
    actionDate: '2025-01-15',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  },
  'S. 108': {
    actionDate: '2025-01-16',
    latestAction: 'Read twice and referred to the Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  },
  'H.R. 1438': {
    actionDate: '2025-02-18',
    latestAction: 'Referred to the Committee on Agriculture, and in addition to the Committees on Foreign Affairs, and Intelligence (Permanent Select), for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
    committee: 'Agriculture Committee; Foreign Affairs Committee; Intelligence (Permanent Select) Committee',
    proposalFamily: 'protecting-americas-agricultural-land-from-foreign-harm-act'
  },
  'S. 618': {
    actionDate: '2025-02-18',
    latestAction: 'Read twice and referred to the Committee on Agriculture, Nutrition, and Forestry.',
    committee: 'Agriculture, Nutrition, and Forestry Committee',
    proposalFamily: 'protecting-americas-agricultural-land-from-foreign-harm-act'
  },
  'H.R. 2147': {
    actionDate: '2025-03-14',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee',
    proposalFamily: 'stop-ccp-visas-act'
  },
  'S. 1086': {
    actionDate: '2025-03-14',
    latestAction: 'Read twice and referred to the Committee on the Judiciary.',
    committee: 'Judiciary Committee',
    proposalFamily: 'stop-ccp-visas-act'
  },
  'H.R. 3618': {
    actionDate: '2025-05-29',
    latestAction: 'Referred to the House Committee on Foreign Affairs.',
    committee: 'Foreign Affairs Committee'
  },
  'S. 1010': {
    actionDate: '2025-03-12',
    latestAction: 'Read twice and referred to the Committee on Foreign Relations.',
    committee: 'Foreign Relations Committee'
  },
  'H.R. 3725': {
    actionDate: '2025-06-04',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  },
  'H.R. 6487': {
    actionDate: '2025-12-05',
    latestAction: 'Referred to the Committee on the Judiciary, and in addition to the Committee on Science, Space, and Technology, for a period to be subsequently determined by the Speaker, in each case for consideration of such provisions as fall within the jurisdiction of the committee concerned.',
    committee: 'Judiciary Committee; Science, Space, and Technology Committee'
  },
  'H.R. 7780': {
    actionDate: '2026-03-03',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee',
    proposalFamily: 'one-nation-one-visa-policy-act'
  },
  'S. 3857': {
    actionDate: '2026-02-12',
    latestAction: 'Read twice and referred to the Committee on the Judiciary.',
    committee: 'Judiciary Committee',
    proposalFamily: 'one-nation-one-visa-policy-act'
  },
  'S. 929': {
    actionDate: '2025-03-11',
    latestAction: 'Read twice and referred to the Committee on Energy and Natural Resources.',
    committee: 'Energy and Natural Resources Committee',
    proposalFamily: 'gate-act'
  },
  'H.R. 10092': {
    actionDate: '2026-08-13',
    latestAction: 'Referred to the House Committee on Science, Space, and Technology.',
    committee: 'Science, Space, and Technology Committee',
    proposalFamily: 'gate-act'
  },
  'H.R. 6225': {
    actionDate: '2025-11-20',
    latestAction: 'Referred to the House Committee on the Judiciary.',
    committee: 'Judiciary Committee'
  }
};

billsData.forEach(bill => Object.assign(bill, federalBillMetadata[bill.billNumber] || {}));
