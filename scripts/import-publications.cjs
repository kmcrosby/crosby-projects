// Script to generate publication markdown files
const fs = require('fs');
const path = require('path');

const publications = [
  {
    title: "Liquid Propellant Mass Measurement in Microgravity",
    authors: ["Kevin M. Crosby", "Rudolph J. Werlink", "Eric A. Hurlbert"],
    date: "2021-01-01",
    type: "Journal Article",
    venue: "Gravitational and Space Research, Vol. 9",
    doi: "10.2478/gsr-2021-0004",
    tags: ["propellant", "microgravity", "mass gauging"]
  },
  {
    title: "Modal Propellant Gauging: The Spectral Density Method",
    authors: ["Kevin M. Crosby", "Rudolph J. Werlink", "Eric A. Hurlbert"],
    date: "2020-01-01",
    type: "Conference Paper",
    venue: "AIAA SPACE 2020",
    doi: "10.2514/6.2020-1443",
    tags: ["propellant", "modal analysis"]
  },
  {
    title: "On-Orbit Propellant Transfer and Mass Gauging",
    authors: ["Kevin M. Crosby"],
    date: "2020-07-01",
    type: "Conference Paper",
    venue: "International Conference on Environmental Systems 2020, Lisbon, Portugal",
    tags: ["propellant", "mass gauging", "on-orbit"]
  },
  {
    title: "The CaNOP CubeSat Mission: Updates, Results, and Applications",
    authors: ["Andrew Santangelo", "Kevin M. Crosby"],
    date: "2020-11-01",
    type: "Conference Paper",
    venue: "AIAA ASCEND 2020",
    doi: "10.2514/6.2020-4176",
    tags: ["cubesat", "CaNOP"]
  },
  {
    title: "Design and Testing of a Field Gradient System to Control a Hybrid Magneto-active Slosh Control System",
    authors: ["Manikanda Vairamani", "Kevin M. Crosby", "Pedro J. Llanos", "Sathya N. Gandadharan", "Nagendra Somanath"],
    date: "2020-01-06",
    type: "Conference Paper",
    venue: "AIAA SCITECH 2020 Forum, Orlando, FL",
    doi: "10.2514/6.2020-2051",
    tags: ["slosh control", "magneto-active"]
  },
  {
    title: "Preliminary Results from the Modal Propellant Gauging Experiment on New Shepard P9",
    authors: ["Kevin M. Crosby", "Taylor Peterson", "Cassi Bossong", "Celestine Ananda", "Nicholas Bartel", "Megan Janiak", "Sheila Franklin", "Rudy Werlink"],
    date: "2020-03-01",
    type: "Conference Paper",
    venue: "Next-Generation Suborbital Researchers Conference, Broomfield, CO",
    tags: ["propellant", "New Shepard", "Blue Origin"]
  },
  {
    title: "Modal Propellant Gauging: High-resolution and non-invasive gauging of both settled and unsettled liquids in reduced gravity",
    authors: ["K.M. Crosby", "N.J. Williams", "R.J. Werlink", "E.A. Hurlbert"],
    date: "2019-01-01",
    type: "Journal Article",
    venue: "Acta Astronautica",
    doi: "10.1016/j.actaastro.2019.01.050",
    tags: ["propellant", "modal analysis", "microgravity"]
  },
  {
    title: "Modal Propellant Gauging: High-resolution and non-invasive gauging of both settled and unsettled liquids in reduced gravity",
    authors: ["K.M. Crosby", "R. Werlink", "N. Williams", "E. Hurlbert"],
    date: "2018-10-01",
    type: "Conference Paper",
    venue: "69th International Astronautical Congress (IAC), Bremen, Germany",
    tags: ["propellant", "modal analysis", "IAC"]
  },
  {
    title: "Non-Intrusive Zero-G and Settled Mass Gauging System using Piezoelectric Actuation and Sensing of Modal Response for Spacecraft Cryogenic or Earth Storable Propellants",
    authors: ["K.M. Crosby", "R. Werlink", "N. Williams", "E. Hurlbert"],
    date: "2018-08-29",
    type: "Conference Paper",
    venue: "JANNAF Interagency Propulsion Committee, In-Space Chemical Propulsion Technical Interchange Meeting, Huntsville, AL",
    tags: ["propellant", "piezoelectric", "cryogenic"]
  },
  {
    title: "Modal Propellant Gauging in Low Gravity",
    authors: ["K.M. Crosby", "T. Rundle", "K. LeCaptain", "R. Werlink"],
    date: "2016-09-01",
    type: "Conference Paper",
    venue: "AIAA SPACE 2016, AIAA SPACE Forum",
    doi: "10.2514/6.2016-5533",
    tags: ["propellant", "modal analysis", "low gravity"]
  },
  {
    title: "Book Review: The Physics of War",
    authors: ["K.M. Crosby"],
    date: "2014-09-01",
    type: "Other",
    venue: "Physics Today, Vol. 67, No. 9",
    doi: "10.1063/PT.3.2520",
    tags: ["book review"]
  },
  {
    title: "Degassing of FC-72 in Microgravity",
    authors: ["D. Weiland", "K.M. Crosby", "N. Hall"],
    date: "2013-01-01",
    type: "Conference Paper",
    venue: "23rd Annual Wisconsin Space Grant Consortium Proceedings",
    doi: "10.17307/wsc.v0i0.12",
    tags: ["degassing", "microgravity"]
  },
  {
    title: "Experimental modal analysis of fluid volume in spacecraft propellant tanks in microgravity",
    authors: ["S. Mathe", "K. Lubick", "K.M. Crosby", "R. Werlink"],
    date: "2013-01-01",
    type: "Conference Paper",
    venue: "23rd Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["modal analysis", "propellant tanks"]
  },
  {
    title: "Zero Gravity Fuel Gauging Using Modal Analysis",
    authors: ["K.M. Crosby", "R. Werlink", "S. Mathe", "L. Lubick"],
    date: "2013-06-03",
    type: "Conference Paper",
    venue: "2013 Next-generation Suborbital Researchers Conference, Broomfield, CO",
    tags: ["fuel gauging", "modal analysis", "zero gravity"]
  },
  {
    title: "Modal Evaluation of Fluid Volume in Spacecraft Propellant Tanks: Part II",
    authors: ["S. Mathe", "K. Anderson", "A. Bakkum", "L. Lubick", "J. Robinson", "D. Weiland", "R. Werlink", "K.M. Crosby"],
    date: "2012-01-01",
    type: "Conference Paper",
    venue: "22nd Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["modal analysis", "propellant tanks"]
  },
  {
    title: "Modal Evaluation of Fluid Volume in Spacecraft Propellant Tanks",
    authors: ["K.M. Crosby", "R. Werlink", "S. Mathe", "K. Lubick"],
    date: "2012-10-22",
    type: "Conference Paper",
    venue: "Annual Meeting of the Lunar Exploration Analysis Group, Greenbelt, MD",
    tags: ["modal analysis", "propellant tanks", "LEAG"]
  },
  {
    title: "Modal Evaluation of Fluid Volume in Spacecraft Propellant Tanks: Part I",
    authors: ["S. Finnvik", "S. Metallo", "J. Robinson", "K.M. Crosby", "R. Werlink"],
    date: "2011-01-01",
    type: "Conference Paper",
    venue: "21st Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["modal analysis", "propellant tanks"]
  },
  {
    title: "Slosh Dynamics in the Orion Downstream Propellant Tank",
    authors: ["K.M. Crosby", "A. Bakkum", "S. Finnvik", "I. Fritz", "B. Frye", "C. Grove", "K. Hartstern", "S. Kreppel", "K. Schultz", "J.P. Braun"],
    date: "2010-09-14",
    type: "Conference Paper",
    venue: "Annual Meeting of the Lunar Exploration Analysis Group, Washington, D.C.",
    tags: ["slosh dynamics", "Orion", "propellant"]
  },
  {
    title: "A Space Sciences Capstone Curriculum at Carthage College",
    authors: ["K.M. Crosby"],
    date: "2010-01-01",
    type: "Conference Paper",
    venue: "20th Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["education", "curriculum"]
  },
  {
    title: "Reduced Pressure Cyclone Separation Studies using Synthetic Lunar Regolith",
    authors: ["J.R. Mackey", "J.H. Agui", "K.M. Crosby", "B. Frye", "T. Sietz"],
    date: "2010-07-01",
    type: "Conference Paper",
    venue: "40th International Conference on Environmental Systems, Barcelona, Spain",
    doi: "10.2514/6.2010-6075",
    tags: ["cyclone separation", "lunar regolith"]
  },
  {
    title: "Scaling Relations for Repose Angles of Lunar Mare Simulants",
    authors: ["K.M. Crosby", "I. Fritz", "S. Kreppel", "E. Martin", "C. Pennington", "B. Frye", "J. Agui"],
    date: "2009-11-16",
    type: "Conference Paper",
    venue: "Annual Meeting of the Lunar Exploration Analysis Group, Houston, Texas",
    tags: ["lunar", "regolith", "repose angles"]
  },
  {
    title: "Repose Angles of Lunar Mare Simulants in Microgravity",
    authors: ["Isa Fritz", "Samantha Kreppel", "Kevin Crosby", "Erin Martin", "Caitlin Pennington", "Brad Frye", "Jose Monegato", "J. Agui"],
    date: "2009-01-01",
    type: "Conference Paper",
    venue: "19th Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["lunar", "regolith", "microgravity"]
  },
  {
    title: "Computational Fluid Dynamical Model of a Cyclone Separator in Microgravity",
    authors: ["K.M. Crosby", "B. Frye"],
    date: "2008-01-01",
    type: "Conference Paper",
    venue: "18th Annual Wisconsin Space Grant Consortium Proceedings",
    tags: ["CFD", "cyclone separator", "microgravity"]
  },
  {
    title: "Measurements of the Collection Efficiency of an Air Cyclone in Lunar Gravity",
    authors: ["K.M. Crosby", "J. Agui", "C. Pennington", "E. Sorensen", "E. Martin", "I. Fritz", "B. Frye"],
    date: "2008-01-01",
    type: "Conference Paper",
    venue: "Wisconsin Space Grant Consortium Proceedings",
    tags: ["cyclone", "lunar gravity"]
  },
  {
    title: "Inertial Filtration of Lunar Dust in Reduced Gravity",
    authors: ["K.M. Crosby"],
    date: "2008-01-01",
    type: "Conference Paper",
    venue: "Joint Annual Meeting of LEAG-ICEUM-SRR",
    tags: ["lunar dust", "filtration", "reduced gravity"]
  },
  {
    title: "Grain Boundary Diffusion in Nanocrystalline Copper under Tensile Stress",
    authors: ["K.M. Crosby"],
    date: "2003-01-01",
    type: "Other",
    venue: "arXiv",
    tags: ["materials science", "nanocrystalline"]
  },
  {
    title: "Hands-on Demonstrations and Teaching Tools for Optics and Adaptive Optics",
    authors: ["D.N. Arion", "K.M. Crosby", "D. Lyons", "K. Rand", "A. Randolph"],
    date: "2003-01-01",
    type: "Conference Paper",
    venue: "Optical Society of America Proceedings",
    tags: ["optics", "education", "adaptive optics"]
  },
  {
    title: "New Physics in an Old Machine: Mechanics of the Trebuchet",
    authors: ["K.M. Crosby", "D. Lyons", "C. Pinter", "A. Randolph"],
    date: "2001-01-01",
    type: "Other",
    venue: "Arbor Scientific Curriculum Kits",
    tags: ["physics", "education", "mechanics"]
  },
  {
    title: "Case Study Experiments in the Introductory Physics Curriculum",
    authors: ["D.N. Arion", "K.M. Crosby", "E.A. Murphy"],
    date: "2000-09-01",
    type: "Journal Article",
    venue: "Physics Teacher",
    tags: ["physics", "education", "curriculum"]
  },
  {
    title: "Reinventing the Physics Major at a Small College",
    authors: ["K.M. Crosby", "D.N. Arion", "J.M. Quashnock"],
    date: "2000-01-01",
    type: "Conference Paper",
    venue: "AAPT Announcer, Vol. 30, No. 4",
    tags: ["physics", "education"]
  },
  {
    title: "Pattern formation during delamination and buckling of thin films",
    authors: ["K.M. Crosby", "R.M. Bradley"],
    date: "1999-01-01",
    type: "Journal Article",
    venue: "Physical Review E, Vol. 59, R2542",
    tags: ["thin films", "pattern formation"]
  },
  {
    title: "Pattern Formation in Thin Film Failure",
    authors: ["K.M. Crosby", "R.M. Bradley"],
    date: "1998-01-01",
    type: "Journal Article",
    venue: "Philosophical Magazine B, Vol. 78",
    tags: ["thin films", "failure"]
  },
  {
    title: "Electromigration-induced void drift and coalescence: Simulations and a dynamic scaling theory",
    authors: ["K.M. Crosby", "R.M. Bradley", "H. Boularot"],
    date: "1997-01-01",
    type: "Journal Article",
    venue: "Physical Review B, Vol. 56",
    tags: ["electromigration", "simulations"]
  },
  {
    title: "Fragmentation of Thin Films Bonded to Solid Substrates: Simulations and a Mean Field Theory",
    authors: ["K.M. Crosby", "R.M. Bradley"],
    date: "1997-06-01",
    type: "Journal Article",
    venue: "Physical Review E, Vol. 55",
    tags: ["thin films", "fragmentation", "simulations"]
  },
  {
    title: "Simulations of Tensile Fracture in Thin Films Bonded to Solid Substrates",
    authors: ["K.M. Crosby", "R.M. Bradley"],
    date: "1997-01-01",
    type: "Journal Article",
    venue: "Philosophical Magazine B, Vol. 76",
    tags: ["thin films", "fracture", "simulations"]
  },
  {
    title: "A Mean Field Theory of Athermal Martensite Growth",
    authors: ["K.M. Crosby", "R.M. Bradley"],
    date: "1997-01-01",
    type: "Journal Article",
    venue: "Philosophical Magazine Letters, Vol. 75",
    tags: ["martensite", "mean field theory"]
  },
  {
    title: "Optical Properties and Laser Damage Measurements of Inorganic Polymer Films",
    authors: ["G.H. Exarhos", "K.M. Crosby"],
    date: "1989-01-01",
    type: "Conference Paper",
    venue: "Laser Induced Damage in Optical Materials",
    tags: ["optics", "laser damage", "polymer films"]
  }
];

// Create output directory
const outDir = path.join(__dirname, '..', 'src', 'content', 'publications');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate slug from title
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 60);
}

// Generate markdown files
publications.forEach((pub, index) => {
  const year = pub.date.split('-')[0];
  const slug = slugify(pub.title);
  const filename = `${year}-${slug}.md`;

  const content = `---
title: "${pub.title.replace(/"/g, '\\"')}"
authors:
${pub.authors.map(a => `  - "${a}"`).join('\n')}
date: ${pub.date}
type: "${pub.type}"
venue: "${pub.venue.replace(/"/g, '\\"')}"
${pub.doi ? `doi: "${pub.doi}"` : ''}
${pub.abstract ? `abstract: "${pub.abstract.replace(/"/g, '\\"')}"` : ''}
tags:
${pub.tags.map(t => `  - "${t}"`).join('\n')}
---
`;

  fs.writeFileSync(path.join(outDir, filename), content);
  console.log(`Created: ${filename}`);
});

console.log(`\nGenerated ${publications.length} publication files in ${outDir}`);
