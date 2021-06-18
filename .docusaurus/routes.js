
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/web/',
  component: ComponentCreator('/web/','9e0'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug',
  component: ComponentCreator('/web/__docusaurus/debug','a41'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/config',
  component: ComponentCreator('/web/__docusaurus/debug/config','392'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/content',
  component: ComponentCreator('/web/__docusaurus/debug/content','ef0'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/globalData',
  component: ComponentCreator('/web/__docusaurus/debug/globalData','2b1'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/metadata',
  component: ComponentCreator('/web/__docusaurus/debug/metadata','6f0'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/registry',
  component: ComponentCreator('/web/__docusaurus/debug/registry','037'),
  exact: true,
},
{
  path: '/web/__docusaurus/debug/routes',
  component: ComponentCreator('/web/__docusaurus/debug/routes','f70'),
  exact: true,
},
{
  path: '/web/about',
  component: ComponentCreator('/web/about','f38'),
  exact: true,
},
{
  path: '/web/blog',
  component: ComponentCreator('/web/blog','b45'),
  exact: true,
},
{
  path: '/web/blog/hola',
  component: ComponentCreator('/web/blog/hola','c98'),
  exact: true,
},
{
  path: '/web/blog/tags',
  component: ComponentCreator('/web/blog/tags','701'),
  exact: true,
},
{
  path: '/web/blog/tags/docusaurus',
  component: ComponentCreator('/web/blog/tags/docusaurus','2d8'),
  exact: true,
},
{
  path: '/web/blog/tags/facebook',
  component: ComponentCreator('/web/blog/tags/facebook','b87'),
  exact: true,
},
{
  path: '/web/blog/tags/hello',
  component: ComponentCreator('/web/blog/tags/hello','1bc'),
  exact: true,
},
{
  path: '/web/blog/tags/hola',
  component: ComponentCreator('/web/blog/tags/hola','743'),
  exact: true,
},
{
  path: '/web/blog/welcome',
  component: ComponentCreator('/web/blog/welcome','149'),
  exact: true,
},
{
  path: '/web/markdown-page',
  component: ComponentCreator('/web/markdown-page','898'),
  exact: true,
},
{
  path: '/web/docs/docs',
  component: ComponentCreator('/web/docs/docs','1f4'),
  
  routes: [
{
  path: '/web/docs/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/web/docs/docs/tutorial-extras/manage-docs-versions','adf'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/web/docs/docs/tutorial-extras/translate-your-site','f58'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/translate-your-site',
  component: ComponentCreator('/web/docs/docs/tutorial-new/translate-your-site','8d4'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/congratulations',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/congratulations','311'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/create-a-blog-post','697'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/create-a-document',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/create-a-document','93c'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/create-a-page',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/create-a-page','1cf'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/deploy-your-site','94b'),
  exact: true,
},
{
  path: '/web/docs/docs/tutorial-new/tutorial-basics/markdown-features',
  component: ComponentCreator('/web/docs/docs/tutorial-new/tutorial-basics/markdown-features','fc4'),
  exact: true,
},
{
  path: '/web/docs/docs/welcome',
  component: ComponentCreator('/web/docs/docs/welcome','cf5'),
  exact: true,
},
]
},
{
  path: '/web/docs',
  component: ComponentCreator('/web/docs','a20'),
  
  routes: [
{
  path: '/web/docs/1234',
  component: ComponentCreator('/web/docs/1234','f46'),
  exact: true,
},
{
  path: '/web/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/web/docs/tutorial-extras/manage-docs-versions','384'),
  exact: true,
},
{
  path: '/web/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/web/docs/tutorial-extras/translate-your-site','a0d'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/translate-your-site',
  component: ComponentCreator('/web/docs/tutorial-new/translate-your-site','455'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/congratulations',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/congratulations','1dd'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/create-a-blog-post','d21'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/create-a-document',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/create-a-document','b00'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/create-a-page',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/create-a-page','7d3'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/deploy-your-site','c58'),
  exact: true,
},
{
  path: '/web/docs/tutorial-new/tutorial-basics/markdown-features',
  component: ComponentCreator('/web/docs/tutorial-new/tutorial-basics/markdown-features','dba'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
