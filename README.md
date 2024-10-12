# Morgan Lab Website

This is the source code for [morganresearchlab.github.io](https://morganresearchlab.github.io/). The code is written in Javascript using Next.js framework. Sounds overwhelming for people with no knowledge of Javascript or even programming, I know! However I already structured it in a way that anyone (even if you don't have knowledge of programming) can edit it easily.

To update most of the information on the website, all you have to do is update the `json` file in the `public/data`. For example to add a new member just add a new `json` object to the `public/data/member.json` e.g.,
```
{
    "id": 17,
    "name": "New Member",
    "role": "PhD Student",
    "join_date": "01-01-1970",
    "email": "newmember@abdn.ac.uk",
    "twitter": "newmember",
    "website": "https://www.abdn.ac.uk/people/new.member",
    "github": "newmember",
    "image": "newmember.png",
    "bio": [
        "New member bio.",
    ],
    "tag": [
        "Computational Biology",
    ]
}
```
Commit your changes once you're done and once the Github Action finishes running, if successful you will see the change on the website. If you have Node.js installed you can preview the changes by running `npm run dev` on your local computer and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

In the current version, you can edit these parts of the website:
- Alumni on `/people`: `alumni.json`
- Collaborator on `/research`: `collaborator.json`
- Current Research header on `/research`: `current_research.json`
- Funder on homepage: `funder.json`
- Member on `/people` and homepage: `member.json`
- News on `/news` and homepage: `news.json`
- "Our Research" section on homepage: `research_intro.json`
- Research details on `/research`: `research.json`

Will add more!

If you're feeling adventurous you might also update the source code.

### Credit
- Icons are obtained from flaticon.com
- Image on the Homepage is AI-generated with "microscopy image of t cells with different fluorescent colors" prompt before being reverted to grayscale, blurred and added black layer with alpha of 0.1
