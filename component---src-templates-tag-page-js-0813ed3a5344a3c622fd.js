(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(158),c=n(152),s=n(178),m=n(155),u=n(166),d=n.n(u),f=n(165),g=c.default.header.withConfig({displayName:"tag-page__Header",componentId:"sc-1eo1xtj-0"})(["text-align:center;font-size:",";"],function(e){return e.theme.scale(1)}),h=c.default.span.withConfig({displayName:"tag-page__TagName",componentId:"sc-1eo1xtj-1"})(["font-size:",";display:block;text-align:center;"],function(e){return e.theme.scale(5)}),p=Object(c.default)(l.Link).withConfig({displayName:"tag-page__AllTagsLink",componentId:"sc-1eo1xtj-2"})(["text-align:center;padding:"," 0;font-weight:bold;color:",";font-size:",";display:block;position:relative;text-decoration:underline;transition:0.3s;&:hover{color:",";transition:0.3s;}"],function(e){return e.theme.scale(1)},function(e){return e.theme.colors.yellow},function(e){return e.theme.scale(0)},function(e){return e.theme.colors.white}),b=function(e){var t=e.data,n=e.pageContext,a=e.location,o=t.allMarkdownRemark.edges.map(function(e){return e.node}),r=t.site.siteMetadata.author,l=i.a.createElement(m.b,{id:"tags.allTagsLink"},function(e){return i.a.createElement(p,{to:"/"+n.langKey+"/tags/"},e)});return i.a.createElement(f.a,{location:a},i.a.createElement("section",null,i.a.createElement(g,null,i.a.createElement(m.b,{id:"tags"},function(e){return i.a.createElement(d.a,{title:n.tag+" | "+e,meta:[{name:"description",content:e}]})}),i.a.createElement(m.b,{id:"tags.nPostsTaggedWith",values:{nPosts:t.allMarkdownRemark.totalCount}}),i.a.createElement(h,null,"“",n.tag,"”"),l),i.a.createElement(s.a,{posts:o,author:r}),i.a.createElement("footer",null,l)))};b.propTypes={data:r.a.object,location:r.a.object.isRequired,pageContext:r.a.object},t.default=b;var w="2475724376"},173:function(e,t,n){"use strict";n(28);var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(155),c=function(e){return i.a.createElement("time",Object.assign({},e,{dateTime:e.date}),i.a.createElement(l.a,{value:new Date(e.date),month:"long",day:"numeric",year:"numeric"}))};c.propTypes={date:r.a.string.isRequired},t.a=c},178:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=(n(184),n(171)),c=n(152),s=n(173),m=n(170),u=n(207),d=n.n(u),f=n(185),g=n.n(f),h=Object(c.default)(m.b).withConfig({displayName:"Post__GridContainer",componentId:"sc-1krhwod-0"})(["border:",";border-radius:0.25rem;height:100%;"],function(e){return e.theme.blog.list.item.border}),p=Object(c.default)(m.a).withConfig({displayName:"Post__Body",componentId:"sc-1krhwod-1"})(["padding:",";"],function(e){return e.theme.blog.list.item.padding}),b=Object(c.default)(m.a).withConfig({displayName:"Post__Footer",componentId:"sc-1krhwod-2"})(["font-family:",";font-size:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.footer.fontFamily},function(e){return e.theme.blog.list.item.footer.fontSize},function(e){return e.theme.blog.list.item.footer.padding},function(e){return e.theme.blog.list.item.footer.lineHeight}),w=c.default.h2.withConfig({displayName:"Post__Title",componentId:"sc-1krhwod-3"})(["padding:0;font-family:",";font-size:",";line-height:",";margin:",";"],function(e){return e.theme.blog.list.item.title.fontFamily},function(e){return e.theme.blog.list.item.title.fontSize},function(e){return e.theme.blog.list.item.title.lineHeight},function(e){return e.theme.blog.list.item.title.margin}),y=Object(c.default)(l.a).withConfig({displayName:"Post__TitleLink",componentId:"sc-1krhwod-4"})(["color:",";&:hover{color:",";}"],function(e){return e.theme.blog.list.item.title.color},function(e){return e.theme.blog.list.item.title.hover.color}),E=c.default.p.withConfig({displayName:"Post__Text",componentId:"sc-1krhwod-5"})(["font-family:",";font-size:",";color:",";margin:",";padding:",";line-height:",";"],function(e){return e.theme.blog.list.item.text.fontFamily},function(e){return e.theme.blog.list.item.text.fontSize},function(e){return e.theme.blog.list.item.text.color},function(e){return e.theme.blog.list.item.text.margin},function(e){return e.theme.blog.list.item.text.padding},function(e){return e.theme.blog.list.item.text.lineHeight}),_=Object(c.default)(d.a).withConfig({displayName:"Post__ProfilePicture",componentId:"sc-1krhwod-6"})(["display:block;border-radius:50%;"]),k=c.default.span.withConfig({displayName:"Post__Author",componentId:"sc-1krhwod-7"})([""]),x=Object(c.default)(s.a).withConfig({displayName:"Post__Date",componentId:"sc-1krhwod-8"})(["color:",";display:block;"],function(e){return e.theme.blog.list.item.footer.time.color}),v=function(e){var t=e.post,n=e.author;return i.a.createElement(h,{columns:1,rows:"auto 1fr auto"},i.a.createElement(m.a,null,i.a.createElement(l.a,{to:t.fields.slug},i.a.createElement(g.a,{sizes:t.frontmatter.image.childImageSharp.sizes}))),i.a.createElement(p,null,i.a.createElement(w,null,i.a.createElement(y,{to:t.fields.slug},t.frontmatter.title)),i.a.createElement(E,null,t.excerpt)),i.a.createElement(b,null,i.a.createElement(m.b,{columns:"50px 1fr 25px"},i.a.createElement(m.a,{middle:!0},i.a.createElement(_,{email:n.email,alt:n.name,width:40,height:40})),i.a.createElement(m.a,{middle:!0},i.a.createElement(k,null,n.name),i.a.createElement(x,{pubdate:"pubdate",date:t.frontmatter.date})),i.a.createElement(m.a,{center:!0,middle:!0},i.a.createElement(l.a,{to:t.fields.slug},i.a.createElement("svg",{width:"25",height:"25"},i.a.createElement("path",{d:"M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z",fillRule:"evenodd"})))))))};v.propTypes={post:r.a.shape({fields:r.a.shape({slug:r.a.string.isRequired,langKey:r.a.string.isRequired}),frontmatter:r.a.shape({title:r.a.string.isRequired,date:r.a.string.isRequired}),excerpt:r.a.string.isRequired}),author:r.a.object.isRequired};var C=v,j=(c.default.ul.withConfig({displayName:"PostList__Ul",componentId:"sc-1afbvcq-0"})(["list-style:none;margin:",";padding:",";"],function(e){return e.theme.blog.list.ul.margin},function(e){return e.theme.blog.list.ul.padding}),function(e){return i.a.createElement("nav",null,i.a.createElement(m.b,{columns:"repeat(auto-fit,minmax(360px,1fr))",gap:"30px",alignContent:"stretch"},e.posts.map(function(t){return i.a.createElement(m.a,{key:t.fields.slug},i.a.createElement(C,{post:t,author:e.author}))})))});j.propTypes={posts:r.a.array.isRequired,author:r.a.object.isRequired};t.a=j}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-0813ed3a5344a3c622fd.js.map