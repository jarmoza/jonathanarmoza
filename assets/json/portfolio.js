const tileContent = {

    "digital-humanities": [

        {
            id: "aolm",
            title: {

                short: "The Art of Literary Modeling",
                text: "The Art of Literary Modeling",
                date: "2018-present"
            },
            body: {

                text: `My PhD dissertation on the qualities of 'literary' modeling for digital humanities. Works examined include an array of 19th century American literature:
                large collections from Hathi Trust and Project Gutenberg, the poems of Emily Dickinson, Melville's <i>Moby-Dick</i>, and the autobiography of Mark Twain.
                Previews of some of the ideas in this work can be found on my <a href="https://jonathantalks.substack.com">Substack blog</a>.`,
                links: {

                    "Source code": "https://github.com/jarmoza/aolm",
                    "Blog": "https://jonathantalks.substack.com"
                },
                screenshots: {
    
                }
            },
            image: {

                link: "./assets/images/aolm_pollan_interior.jpg",
                altText: "Interior of Michael Pollan's writing house"
            }
        },

        {
            id: "hayford",
            title: {

                short: "Hayford's Duplicates",
                text: "Hayford's Duplicates: Cobbling a Model of Melville's <i>Moby-Dick</i>",
                date: "2017, 2023"
            },
            body: {

                text: `Famed Melville scholar, Harrison Hayford, once speculated
                 on the multiple draft stages <i>Moby-Dick</i> underwent during 
                 its writing. 'Hayford's Duplicates' takes these ideas and uses 
                 nonnegative matrix factorization to model the novel as a way of 
                 proofing Hayford's ideas. The work includes several visualizations 
                 that help tease apart the modeled draft stages and focuses on
                  the character Queequeg. This project was first conceived in 2017
                   and through a series of iterations and talks became a 
                   <a href="https://www.degruyter.com/document/doi/10.1515/9783110781502-008/html">chapter</a> 
                   in the book <i>Computational Stylistics in Poetry, Prose, and Drama</i> (2023).`,
                links: {

                    "Source code and visualizations": "https://github.com/jarmoza/hayfords_duplicates",
                    "Publication": "https://www.degruyter.com/document/doi/10.1515/9783110781502-008/html"
                },
                screenshots: {
    
                }                
            },
            image: {

                link: "./assets/images/hayford_queequeg.png",
                altText: "Queequeg from Moby-Dick"
            }
        },

        {
            id: "wfs",
            title: {

                short: "Working from Scraps",
                text: "Working from Scraps",
                date: "2017-2018"
            },
            body: {

                text: `'Working from Scraps' is a VueJS web app that explores 
                metadata gathered from the voluminous scrapbooks of Scottish 
                national poet, Edwin Morgan (1920-2010). The web app features 
                multiple levels of exploration of metadata at the collection, 
                book, and page level, allowing visitors to cross reference the 
                many people, places, and objects found in the scrapbooks. A 
                collaboration with researchers Bridget Moynihan and Anouk Lang 
                at the University of Edinburgh, 'Working from Scraps' was funded 
                by the Carnegie Trust for the Universities of Scotland.`,
                links: {

                    "Main site": "http://digitaldecoupage.llc.ed.ac.uk/context/",
                    "Demo video": "https://vimeo.com/379640956",
                    "Source code": "https://github.com/jarmoza/working-from-scraps-source",
                    "Publication": "https://dh-abstracts.library.virginia.edu/works/9933"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/wfs_scrapbook9_cover_icon.png",
                altText: "Working from scraps frontpage"
            }
        },

        {
            id: "dickinson-topic-model",
            title: {

                short: "Dickinson, the Fascicle, and the Topic Model",
                text: "Dickinson, the Fascicle, and the Topic Model",
                date: "2016"
            },
            body: {

                text: `My Master's thesis at McGill University included the development of the 'Topic Words in Context' topic modeling visualization alongside a study of the lost fascicle books of Emily Dickinson and how we can use LDA-style topic models to understand thematics woven through that rediscovered publication ordering.
                The thesis also includes many additional visuals and a discussion of how we can take thematics we glean from our own readings of Dickinson's poems and use topic model data to complement them. <a href="https://github.com/jarmoza/masters_thesis">Master's thesis</a> <a href="https://github.com/jarmoza/twic2">Code</a>.`,
                links: {

                    "Publication": "https://escholarship.mcgill.ca/concern/theses/wd376016x",
                    "Visualization source code": "https://github.com/jarmoza/twic2"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/dickinson-topic-model-portrait.png",
                altText: "A portrait phot of Emily Dickinson",
            }
        },
    ],
    "tools": [
        
        {
            id: "tcr",
            title: {

                short: "TWiC Close Reading",
                text: "TWiC - Close Reading",
                date: "2017"
            },
            body: {

                text: `'TWiC - Close Reading' is a lightweight, browser-based
                tool to look at the lowest levels of a topic model and to make quick
                assessments of what topic words are present in the documents of a
                corpora as well as their statistical weight in a document, topic, and
                collection. Based on the originating idea of
                <a href="https://github.com/jarmoza/twic2">my more complex D3.js
                visualization, 'Topic Words in Context',</a> &mdash; of understanding the
                topic words of a topic model in their original textual contexts,
                'TWiC - Close Reading' stays focused on that original context,
                taking the outputs of an LDA-style topic model and using a Python
                script to generate an array of simple HTML files for local viewing
                and interactions that link topic words together and make clear where
                they rank in the model.`,
                links: {

                    "Source code and documentation": "https://github.com/jarmoza/twic_close_reading"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/tcr_magnifying_glass.png",
                altText: "Screenshot of TWiC Close Reading looking at Melville's Moby-Dick"
            }
        },
        
        {
            id: "twic",
            title: {

                short: "Topic Words in Context",
                text: "Topic Words in Context",
                date: "2014-2015"
            },
            body: {

                text: `'TWiC' is a browser-based, D3.js data visualization environment for exploring LDA-based topic models of large collections of documents.
                It uses an interactive, multi-panel system to show levels of information within a topic model and allows users to easily link summary model data 
                with the model's lowest level – where topic words are found in its documents
                , and gives views of the quantitative relationships between all.
                TWiC offers both a statistical view of topic models and a more publication-centered view when documents need to be grouped together by some real world context.
                First developed in 2014 under the guidance of Stéfan Sinclair, TWiC continues to be supported and has been used by students and professors to allow for more visual
                exploration of topic models`,
                links: {

                    "Source code and documentation": "https://github.com/jarmoza/twic2"
                },
                screenshots: {

                }
            },
            image: {

                link: "./assets/images/twic_datashapes_rectangle.png",
                altText: "TWiC text rectangle"
            }
        }        
    ],
    "neuroscience": [

        {
            id: "neurobagel",
            title: {

                short: "Neurobagel",
                text: "Neurobagel",
                date: "2021-2023"
            },
            body: {

                text: `'Neurobagel' is a deployable Nuxt.js and Python tool ecosystem and metadata standard that facilitates 
                the annotating and federated querying of neuroscience imaging and phenotypic datasets, and ultimately,
                the construction of cross-dataset cohorts of subjects for new research projects.
                Based in <a href="https://neurodatascience.github.io/">Origami Lab</a> at the Montréal Neurological Institute, the project's goal is to aid neuroscience and related researchers in reusing and contributing data to the broader scientific community. The team is led
                by Dr. Jean-Baptiste Poline and began as a collaboration between <a href="https://www.surchs.com/">Sebastian Urchs</a> and myself.`,
                links: {

                    "Main site": "https://neurobagel.org",
                    "Source code and documentation": "https://github.com/neurobagel"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/neurobagel_brain_bagel.png",
                altText: "Neurobagel pixel art logo prototype"
            }
        },
        
        {
            id: "neuromod",
            title: {

                short: "Neuromod language task",
                text: "Neuromod: Language Task",
                date: "2017-2021"
            },
            body: {

                text: `'Neuromod' is a multi-year project based at CRIUGM under the direction of Pierre Bellec that observes human brain activity while experiencing different kinds of media and attempts to transform such response into AI models.
                The language component of the project - a collaboration between myself, Valentina Borghesani, and Simona Brambatti - had subjects make semantic connections between word triples.
                My role was to consult on experiment design, and implement rich data generation in Python via multiple NLP criteria and sources. Subject responses to the stimuli were then 
                compared to the responses from a number of large word embedding models and neuropsychological datasets. This work was recently published in <i>Nature</i>.`,
                links: {

                    "Main site": "https://www.cneuromod.ca/",
                    "Publication": "https://www.nature.com/articles/s41597-023-02015-3",
                    "Source code and data": "https://osf.io/at8cs/"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/neuromod_language_task_icon.png",
                altText: "Courtois-Neuromod language task icon - a head in silhouette with letters floating inside of it"
            }
        },

        {
            id: "dashqc",
            title: {

                short: "dashQC",
                text: "dashQC: An interactive quality control dashboard",
                date: "2017-2018"
            },
            body: {

                text: `'dashQC' is a modular, JavaScript-based dashboard built to facilitate the manual quality control process of functional MRI data
                It takes preprocessed neuroimaging and makes the images viewable for comparison, quality rating, and problem-area tagging.
                Developed as a project at Dr. Pierre Bellec's Simexp Lab at the Centre de Recherche Institut Universitaire de gériatrie de Montréal,
                'dashQC' is an early collaboration between neuroscience researcher Sebastian Urchs and myself.`,
                links: {

                    "Source code and documentation": "https://github.com/SIMEXP/dashQC_fmri"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/dashqc_brain_fmri_slices.png",
                altText: "fMRI image of nine slices of a brain"
            }
        }
    ],
    "games": [

        {
            id: "scribblenauts",
            title: {

                short: "Scribblenauts",
                text: "Scribblenauts",
                date: "2009"
            },
            body: {

                text: `'Scribblenauts' is an action-adventure game by 5th cell media that features a unique writing
                element that produces emergent gameplay. Players play as Maxwell, a character with a magic notebook,
                which allows players to summon any object they wish into the game world via an on-screen keyboard. Thousands of items
                were created for the game, each with physical properties that allowed them to interact with each other and
                the game world.`,
                links: {

                    "Wiki": "https://en.wikipedia.org/wiki/Scribblenauts"
                },                
                screenshots: {

                }
            },
            image: {

                link: "./assets/images/scribblenauts_jonathan_armoza.png",
                altText: "Jonathan Armoza as character in Scribblenauts"
            }
        },

        {
            id: "locks-quest",
            title: {

                short: "Lock's Quest",
                text: "Lock's Quest",
                date: "2008"
            },
            body: {

                text: `Lock's Quest is a real-time strategy game, incorporating
                 tower defense gameplay elements. The battlefield, viewed from 
                 an isometric perspective, is displayed on the DS's bottom screen. 
                 Combat is divided into two phases, Build and Battle. During the 
                 Build phase, the player has a limited amount of time and resources
                  to construct defenses, which consist of walls, towers, cannons, 
                  machines, and traps. Once the Build phase ends, the Battle phase begins.`,
                links: {

                    "Wiki": "https://en.wikipedia.org/wiki/Lock%27s_Quest"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/locks_quest_lock.png",
                altText: "Lock from Lock's Quest"
            }            
        },

        {
            id: "civ3",
            title: {

                short: "Civilization III",
                text: "Sid Meier's Civilization III",
                date: "2001" 
            },
            body: {

                text: `Civilization III, like the other Civilization games, 
                entails building an empire, from the ground up, beginning in 
                4,000 BC and continuing slightly beyond the modern day. The 
                player must construct and improve cities, train military and 
                non-military units, improve terrain, research technologies, 
                build Wonders of the World, make war or peace with neighboring 
                civilizations, and so on. The player must balance a good 
                infrastructure, resources, diplomatic and trading skills, 
                technological advancement, city and empire management, culture, 
                and military power to succeed.`,
                links: {

                    "Main site": "https://civilization.com/civilization-3/",
                    "Wiki": "https://en.wikipedia.org/wiki/Civilization_III"
                },
                screenshots: {
                    
                }
            },
            image: {

                link: "./assets/images/civ3_babel.jpg",
                altText: "Tower of Babel image used in Civilization III"
            }            
        }
    ]
};