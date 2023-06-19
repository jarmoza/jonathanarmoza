const tileContent = {

    "digital-humanities": [

        {
            id: "hayford",
            title: {

                text: "Hayford's Duplicates: Cobbling a Model of Melville's <i>Moby-Dick</i>",
                date: "2017, 2023",
                link: "https://www.degruyter.com/document/doi/10.1515/9783110781502-008/html"
            },
            body: {

                links: {

                    "Main site": "",
                    "Code and visualizations": "",
                    "Publication": ""
                },
                textPreDots: `Famed Melville scholar, Harrison Hayford, once speculated on the multiple draft stages <i>Moby-Dick</i> underwent during its writing. 'Hayford's Duplicates' takes these ideas and uses nonnegative matrix factorization to model the novel as a way of proofing Hayford's ideas.`,
                textPostDots: `The work includes several visualizations that help tease apart the modeled draft stages and focuses on the character Queequeg. This project was first conceived in 2017 and through a series of iterations and talks became a <a href="https://www.degruyter.com/document/doi/10.1515/9783110781502-008/html">chapter</a> in the book <i>Computational Stylistics in Poetry, Prose, and Drama</i> (2023). <a href="https://github.com/jarmoza/hayfords_duplicates">Code and visualizations</a>.`
            },
            image: {

                link: "./assets/images/hayford_queequeg.png",
                altText: "Queequeg from Moby-Dick"
            }
        },

        {
            id: "wfs",
            title: {

                text: "Working from Scraps",
                date: "2017-2018",
                link: "http://digitaldecoupage.llc.ed.ac.uk/context/"
            },
            body: {

                textPreDots: `'Working from Scraps' is a VueJS web app that explores metadata gathered from the voluminous scrapbooks of Scottish national poet, <a href="https://en.wikipedia.org/wiki/Edwin_Morgan_(poet)">Edwin Morgan (1920-2010)</a>.
                The web app features multiple levels of exploration of metadata at the collection, book, and page level, allowing visitors to cross reference the many people, places, and objects found in the scrapbooks. `,
                textPostDots: `A collaboration with researchers Bridget Moynihan and Anouk Lang at the University of Edinburgh, 'Working from Scraps' was funded by the government of Scotland.  Watch the <a href="https://vimeo.com/379640956">demo video</a> and view the <a href="https://github.com/jarmoza/working-from-scraps-source">source code</a>.`
            },
            image: {

                link: "./assets/images/wfs_scrapbook9_cover_icon.png",
                altText: "Working from scraps frontpage"
            }
        },

        {
            id: "dickinson-topic-model",
            title: {

                text: "Dickinson, the Fascicle, and the Topic Model",
                date: "2016",
                link: "https://escholarship.mcgill.ca/concern/theses/wd376016x"
            },
            body: {

                textPreDots: `My Master's thesis at McGill University included the development of the 'Topic Words in Context' topic modeling visualization alongside a study of the lost fascicle books of Emily Dickinson and how we can use LDA-style topic models to understand thematics woven through that rediscovered publication ordering.`,
                textPostDots: `The thesis also includes many additional visuals and a discussion of how we can take thematics we glean from our own readings of Dickinson's poems and use topic model data to complement them. <a href="https://github.com/jarmoza/masters_thesis">Master's thesis</a> <a href="https://github.com/jarmoza/twic2">Code</a>.`
            },
            image: {

                link: "./assets/images/dickinson-topic-model-portrait.png",
                altText: "Dickinson's Fascicle 21 in TWiC's publication view",
            }
        },        

        {
            id: "twic",
            title: {

                text: "Topic Words in Context",
                date: "2014-2015",
                link: "https://github.com/jarmoza/twic2"
            },
            body: {

                textPreDots: `'TWiC' is a browser-based, D3.js data visualization environment for exploring LDA-based topic models of large collections of documents.
                                It uses an interactive, multi-panel system to show levels of information within a topic model and allows users to easily link summary model data 
                                with the model's lowest level – where topic words are found in its documents`,
                textPostDots: `, and gives views of the quantitative relationships between all.
                                TWiC offers both a statistical view of topic models and a more publication-centered view when documents need to be grouped together by some real world context.
                                First developed in 2014 under the guidance of Stéfan Sinclair, TWiC continues to be supported and has been used by students and professors to allow for more visual
                                exploration of topic models`
            },
            image: {

                link: "./assets/images/twic_datashapes_rectangle.png",
                altText: "TWiC text rectangle"
            }
        }      
    ],
    "neuroscience": [

    ],
    "games": [

    ]
};