const nationalities = [
  { label: 'Afghan', value: 'AFG' },
  { label: 'Albanian', value: 'ALB' },
  { label: 'Algerian', value: 'DZA' },
  { label: 'American', value: 'USA' },
  { label: 'Andorran', value: 'AND' },
  { label: 'Angolan', value: 'AGO' },
  { label: 'Anguillan', value: 'AIA' },
  { label: 'Argentine', value: 'ARG' },
  { label: 'Armenian', value: 'ARM' },
  { label: 'Australian', value: 'AUS' },
  { label: 'Austrian', value: 'AUT' },
  { label: 'Azerbaijani', value: 'AZE' },
  { label: 'Bahamian', value: 'BHS' },
  { label: 'Bahraini', value: 'BHR' },
  { label: 'Bangladeshi', value: 'BGD' },
  { label: 'Barbadian', value: 'BRB' },
  { label: 'Belarusian', value: 'BLR' },
  { label: 'Belgian', value: 'BEL' },
  { label: 'Belizean', value: 'BLZ' },
  { label: 'Beninese', value: 'BEN' },
  { label: 'Bermudian', value: 'BMU' },
  { label: 'Bhutanese', value: 'BTN' },
  { label: 'Bolivian', value: 'BOL' },
  { label: 'Botswanan', value: 'BWA' },
  { label: 'Brazilian', value: 'BRA' },
  { label: 'British', value: 'GBR' },
  { label: 'British Virgin Islander', value: 'VGB' },
  { label: 'Bruneian', value: 'BRN' },
  { label: 'Bulgarian', value: 'BGR' },
  { label: 'Burkinan', value: 'BFA' },
  { label: 'Burmese', value: 'BUR' },
  { label: 'Burundian', value: 'BDI' },
  { label: 'Cambodian', value: 'KHM' },
  { label: 'Cameroonian', value: 'CMR' },
  { label: 'Canadian', value: 'CAN' },
  { label: 'Cape Verdean', value: 'CPV' },
  { label: 'Cayman Islander', value: 'CYM' },
  { label: 'Central African', value: 'CAF' },
  { label: 'Chadian', value: 'TCD' },
  { label: 'Chilean', value: 'CHL' },
  { label: 'Chinese', value: 'CHN' },
  { label: 'Citizen of Antigua and Barbuda', value: 'ATG' },
  { label: 'Citizen of Bosnia and Herzegovina', value: 'BIH' },
  { label: 'Citizen of Guinea-Bissau', value: 'GNB' },
  { label: 'Citizen of Kiribati', value: 'KIR' },
  { label: 'Citizen of Seychelles', value: 'SYC' },
  { label: 'Citizen of the Dominican Republic', value: 'DOM' },
  { label: 'Citizen of Vanuatu ', value: 'VUT' },
  { label: 'Colombian', value: 'COL' },
  { label: 'Comoran', value: 'COM' },
  { label: 'Congolese (Congo)', value: 'COG' },
  { label: 'Congolese (DRC)', value: 'COD' },
  { label: 'Cook Islander', value: 'COK' },
  { label: 'Costa Rican', value: 'CRI' },
  { label: 'Croatian', value: 'HRV' },
  { label: 'Cuban', value: 'CUB' },
  { label: 'Cymraes', value: 'GBR' },
  { label: 'Cymro', value: 'GBR' },
  { label: 'Cypriot', value: 'CYP' },
  { label: 'Czech', value: 'CZE' },
  { label: 'Danish', value: 'DNK' },
  { label: 'Djiboutian', value: 'DJI' },
  { label: 'Dominican', value: 'DMA' },
  { label: 'Dutch', value: 'NLD' },
  { label: 'East Timorese', value: 'TLS' },
  { label: 'Ecuadorean', value: 'ECU' },
  { label: 'Egyptian', value: 'EGY' },
  { label: 'Emirati', value: 'ARE' },
  { label: 'English', value: 'GBR' },
  { label: 'Equatorial Guinean', value: 'GNQ' },
  { label: 'Eritrean', value: 'ERI' },
  { label: 'Estonian', value: 'EST' },
  { label: 'Ethiopian', value: 'ETH' },
  { label: 'Faroese', value: 'FRO' },
  { label: 'Fijian', value: 'FJI' },
  { label: 'Filipino', value: 'PHL' },
  { label: 'Finnish', value: 'FIN' },
  { label: 'French', value: 'FRA' },
  { label: 'Gabonese', value: 'GAB' },
  { label: 'Gambian', value: 'GMB' },
  { label: 'Georgian', value: 'GEO' },
  { label: 'German', value: 'DEU' },
  { label: 'Ghanaian', value: 'GHA' },
  { label: 'Gibraltarian', value: 'GIB' },
  { label: 'Greek', value: 'GRC' },
  { label: 'Greenlandic', value: 'GRL' },
  { label: 'Grenadian', value: 'GRD' },
  { label: 'Guamanian', value: 'GUM' },
  { label: 'Guatemalan', value: 'GTM' },
  { label: 'Guinean', value: 'GIN' },
  { label: 'Guyanese', value: 'GUY' },
  { label: 'Haitian', value: 'HTI' },
  { label: 'Honduran', value: 'HND' },
  { label: 'Hong Konger', value: 'HKG' },
  { label: 'Hungarian', value: 'HUN' },
  { label: 'Icelandic', value: 'ISL' },
  { label: 'Indian', value: 'IND' },
  { label: 'Indonesian', value: 'IDN' },
  { label: 'Iranian', value: 'IRN' },
  { label: 'Iraqi', value: 'IRQ' },
  { label: 'Irish', value: 'IRL' },
  { label: 'Israeli', value: 'ISR' },
  { label: 'Italian', value: 'ITA' },
  { label: 'Ivorian', value: 'CIV' },
  { label: 'Jamaican', value: 'JAM' },
  { label: 'Japanese', value: 'JPN' },
  { label: 'Jordanian', value: 'JOR' },
  { label: 'Kazakh', value: 'KAZ' },
  { label: 'Kenyan', value: 'KEN' },
  { label: 'Kittitian', value: 'KNA' },
  { label: 'Kosovan', value: 'XKX' },
  { label: 'Kuwaiti', value: 'KWT' },
  { label: 'Kyrgyz', value: 'KGZ' },
  { label: 'Lao', value: 'LAO' },
  { label: 'Latvian', value: 'LVA' },
  { label: 'Lebanese', value: 'LBN' },
  { label: 'Liberian', value: 'LBR' },
  { label: 'Libyan', value: 'LBY' },
  { label: 'Liechtenstein citizen', value: 'LIE' },
  { label: 'Lithuanian', value: 'LTU' },
  { label: 'Luxembourger', value: 'LUX' },
  { label: 'Macanese', value: 'MAC' },
  { label: 'Macedonian', value: 'MKD' },
  { label: 'Malagasy', value: 'MDG' },
  { label: 'Malawian', value: 'MWI' },
  { label: 'Malaysian', value: 'MYS' },
  { label: 'Maldivian', value: 'MDV' },
  { label: 'Malian', value: 'MLI' },
  { label: 'Maltese', value: 'MLT' },
  { label: 'Marshallese', value: 'MHL' },
  { label: 'Martiniquais', value: 'MTQ' },
  { label: 'Mauritanian', value: 'MRT' },
  { label: 'Mauritian', value: 'MUS' },
  { label: 'Mexican', value: 'MEX' },
  { label: 'Micronesian', value: 'FSM' },
  { label: 'Moldovan', value: 'MDA' },
  { label: 'Monegasque', value: 'MCO' },
  { label: 'Mongolian', value: 'MNG' },
  { label: 'Montenegrin', value: 'MNE' },
  { label: 'Montserratian', value: 'MSR' },
  { label: 'Moroccan', value: 'MAR' },
  { label: 'Mosotho', value: 'LSO' },
  { label: 'Mozambican', value: 'MOZ' },
  { label: 'Namibian', value: 'NAM' },
  { label: 'Nauruan', value: 'NRU' },
  { label: 'Nepalese', value: 'NPL' },
  { label: 'New Zealander', value: 'NZL' },
  { label: 'Nicaraguan', value: 'NIC' },
  { label: 'Nigerian', value: 'NGA' },
  { label: 'Nigerien', value: 'NER' },
  { label: 'Niuean', value: 'NIU' },
  { label: 'North Korean', value: 'PRK' },
  { label: 'Northern Irish', value: 'GBR' },
  { label: 'Norwegian', value: 'NOR' },
  { label: 'Omani', value: 'OMN' },
  { label: 'Pakistani', value: 'PAK' },
  { label: 'Palauan', value: 'PLW' },
  { label: 'Palestinian', value: 'PSE' },
  { label: 'Panamanian', value: 'PAN' },
  { label: 'Papua New Guinean', value: 'PNG' },
  { label: 'Paraguayan', value: 'PRY' },
  { label: 'Peruvian', value: 'PER' },
  { label: 'Pitcairn Islander', value: 'PCN' },
  { label: 'Polish', value: 'POL' },
  { label: 'Portuguese', value: 'PRT' },
  { label: 'Prydeinig', value: '' },
  { label: 'Puerto Rican', value: 'PRI' },
  { label: 'Qatari', value: 'QAT' },
  { label: 'Romanian', value: 'ROU' },
  { label: 'Russian', value: 'RUS' },
  { label: 'Rwandan', value: 'RWA' },
  { label: 'Salvadorean', value: 'SLV' },
  { label: 'Sammarinese', value: 'SMR' },
  { label: 'Samoan', value: 'WSM' },
  { label: 'Sao Tomean', value: 'STP' },
  { label: 'Saudi Arabian', value: 'SAU' },
  { label: 'Scottish', value: '' },
  { label: 'Senegalese', value: 'SEN' },
  { label: 'Serbian', value: 'SRB' },
  { label: 'Sierra Leonean', value: 'SLE' },
  { label: 'Singaporean', value: 'SGP' },
  { label: 'Slovak', value: 'SVK' },
  { label: 'Slovenian', value: 'SVN' },
  { label: 'Solomon Islander', value: 'SLB' },
  { label: 'Somali', value: 'SOM' },
  { label: 'South African', value: 'ZAF' },
  { label: 'South Korean', value: 'KOR' },
  { label: 'South Sudanese', value: 'SSD' },
  { label: 'Spanish', value: 'ESP' },
  { label: 'Sri Lankan', value: 'LKA' },
  { label: 'St Helenian', value: 'SHN' },
  { label: 'St Lucian', value: 'LCA' },
  { label: 'Stateless', value: 'XXA' },
  { label: 'Sudanese', value: 'SDN' },
  { label: 'Surinamese', value: 'SUR' },
  { label: 'Swazi', value: 'SWZ' },
  { label: 'Swedish', value: 'SWE' },
  { label: 'Swiss', value: 'CHE' },
  { label: 'Syrian', value: 'SYR' },
  { label: 'Taiwanese', value: 'TWN' },
  { label: 'Tajik', value: 'TJK' },
  { label: 'Tanzanian', value: 'TZA' },
  { label: 'Thai', value: 'THA' },
  { label: 'Togolese', value: 'TGO' },
  { label: 'Tongan', value: 'TON' },
  { label: 'Trinidadian', value: 'TTO' },
  { label: 'Tristanian', value: 'SHN' },
  { label: 'Tunisian', value: 'TUN' },
  { label: 'Turkish', value: 'TUR' },
  { label: 'Turkmen', value: 'TKM' },
  { label: 'Turks and Caicos Islander', value: 'TCA' },
  { label: 'Tuvaluan', value: 'TUV' },
  { label: 'Ugandan', value: 'UGA' },
  { label: 'Ukrainian', value: 'UKR' },
  { label: 'Uruguayan', value: 'URY' },
  { label: 'Uzbek', value: 'UZB' },
  { label: 'Vatican citizen', value: 'VUT' },
  { label: 'Venezuelan', value: 'VEN' },
  { label: 'Vietnamese', value: 'VNM' },
  { label: 'Vincentian', value: 'VCT' },
  { label: 'Wallisian', value: 'WLF' },
  { label: 'Welsh', value: 'GBR' },
  { label: 'Yemeni', value: 'YEM' },
  { label: 'Zambian', value: 'ZMB' },
  { label: 'Zimbabwean', value: 'ZWE' },
];


export default nationalities;