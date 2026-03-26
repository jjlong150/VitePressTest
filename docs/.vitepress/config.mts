import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  base: '/VitePressTest/',
  lang: 'en-US',
  title: "Excel to Graphviz",
  description: "Excel to Graphviz Relationship Visualizer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Resources",
            items: [
              { text: 'About', link: '/about/' },
              { text: 'License', link: '/license/' },
              { text: 'Privacy', link: '/privacy/' },
              { text: 'Credits', link: '/acknowledge/' },
              { text: 'Changelog', link: '/changelog/' }
            ]
      },
    ],
    
    logo: "/logo.png",

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Overview', link: '/overview/' },
          { text: 'Workbook', link: '/workbook/' },
          { text: 'Launchpad', link: '/launchpad/' },
        ]
      },
      {
        text: 'Graphs',
        items: [
          {
            text: 'Creating Graphs', link: '/create/',
            items: [
              { text: 'Terminology', link: '/terminology/' },
              { text: 'Create a New Workbook', link: '/prepare/' },
              { text: 'data Worksheet', link: '/dataworksheet/' },
              { text: 'Graphviz Tab', link: '/graphviztab/' },
              { text: 'Type Data, See Graph', link: '/coreconcepts/' }
            ]
          },
          {
            text: 'Add Style', link: '/addstyle/',
            items: [
              { text: 'Style Designer', link: '/designer/' },
              { text: 'Style Gallery', link: '/styles/' },
              { text: 'Create Views', link: '/views/' }
            ]
          },
          { text: 'Publish Graphs', link: '/publish/' },
          { text: 'Post-process SVG Files', link: '/svg/' },
          { text: 'Advanced Graphviz Topics', link: '/advanced/' }
            ]
      },
      {
        text: 'Graphviz',
        items: [
          { text: 'View DOT Source Code', link: '/source/' },
          { text: 'DOT Message Console', link: '/console/' }
        ],
      },
      {
        text: 'Data Manipulation',
        items: [
          { text: 'Using SQL', link: '/sql/' },
          { text: 'SQL to Graph Example', link: '/sql/queries/' },
          { text: 'SQL Extensions', link: '/sql/extensions/',
            items: [
              { text: 'Directives', link: '/sql/directives/' },
              { text: 'Clustering', link: '/sql/clustering/' },
              { text: 'Count Substitution', link: '/sql/counts/' },
              { text: 'Splitting Labels', link: '/sql/labelsplit/' },
              { text: 'Chaining Nodes', link: '/sql/chaining/' },
              { text: 'Creating Subgraphs', link: '/sql/subgraphs/' },
              { text: 'Tree Traversal', link: '/sql/recursion/'},
              { text: 'Iteration', link: '/sql/iterate/' },
              { text: 'Enumeration', link: '/sql/enumerate/' } ,
              { text: 'Concatenation', link: '/sql/concatenation/' }
                  ]
          },
          { text: 'Examples',
            items: [
              { text: 'Organization Charts', link: '/sql/orgcharts/' },
              { text: 'Timelines/Roadmaps', link: '/sql/timeline/' }
                    ]
          },
          { text: 'SQL Syntax', link: '/sql/syntax/' },
        ]
      },
      {
        text: 'Data Exchange',
        items: [
          { text: 'Using JSON Files', link: '/exchange/',
            items: [
              { text: 'Export', link: '/exchange/export/' },
              { text: 'Import', link: '/exchange/import/' }
            ]
          },
        ]
      },
      {
        text: 'Setup',
        items: [
          { text: 'Download', link: '/download/' },
          {
            text: 'Install', link: '/install/',
            items: [
              { text: 'Windows Instructions', link: '/install-win/' },
              { text: 'macOS Instructions', link: '/install-mac/' }
            ]
          }
        ]
      },
      {
        text: 'Maintenance',
        items: [
          { text: 'Diagnostics', link: '/diagnostics/' },
          { text: 'Lists', link: '/lists/' },
          { text: 'Settings', link: '/settings/' },
          { text: 'Information', link: '/info/' }
        ],
      }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2015-present Jeffrey J. Long. All rights reserved.'
    },

    editLink: {
      pattern: 'https://buymeacoffee.com/exceltographviz',
      text: 'Like this tool? Buy me a coffee! ☕'
    },

    socialLinks: [
      { icon: 'github', 
        link: 'https://github.com/jjlong150/ExcelToGraphviz',
        ariaLabel: 'GitHub Repository' },
      { icon: 'linkedin', 
        link: 'https://www.linkedin.com/in/jeffreyjlong/',
        ariaLabel: 'LinkedIn' },
      { icon: 'x', 
        link: 'https://x.com/exceltographviz',
        ariaLabel: 'X/Twitter' },
      { 
        icon: { svg: '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Buy Me a Coffee</title><path d="M4 3h16l-1.5 9H5.5L4 3zm2.2 12h11.6l-.7 4.2c-.2 1.2-1.2 1.8-2.3 1.8H9.2c-1.1 0-2.1-.6-2.3-1.8L6.2 15z"/></svg>' },
        link: 'https://buymeacoffee.com/exceltographviz',
        ariaLabel: 'Buy Me a Coffee' }
    ]
  }
})
