"use strict";(self.webpackChunkauto_rent=self.webpackChunkauto_rent||[]).push([[244],{1423:function(n,e,t){t.d(e,{q:function(){return P}});var i,r,o=t(9439),s=t(2791),c=t(9434),a=t(1945),l=t(8059),u=t(9243),d=t(4164),f=t(168),p=t(6487),x=p.ZP.div(i||(i=(0,f.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(18, 20, 23, 0.5);\n  pointer-events: auto;\n  transition: opacity 200ms ease-in-out, visibility 200ms ease-in-out;\n  z-index: 10;\n"]))),h=p.ZP.div(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  min-height: 252px;\n  max-width: 541px;\n  width: 100%;\n  background-color: #fff;\n  border-radius: 24px;\n"]))),g=t(184),m=document.querySelector("#modal-root"),b=function(n){var e=n.children,t=n.onClose,i=(0,s.useCallback)((function(n){"Escape"===n.code&&t()}),[t]);(0,s.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]);return(0,d.createPortal)((0,g.jsx)(x,{onClick:function(n){n.currentTarget===n.target&&t()},children:(0,g.jsx)(h,{children:e})}),m)},Z=function(){return(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:(0,g.jsx)("path",{d:"M15.63 3.4575C15.2469 3.07425 14.7921 2.77023 14.2915 2.56281C13.7909 2.35539 13.2543 2.24863 12.7125 2.24863C12.1706 2.24863 11.634 2.35539 11.1334 2.56281C10.6329 2.77023 10.178 3.07425 9.79497 3.4575L8.99997 4.2525L8.20497 3.4575C7.4312 2.68373 6.38174 2.24903 5.28747 2.24903C4.19319 2.24903 3.14374 2.68373 2.36997 3.4575C1.5962 4.23127 1.1615 5.28072 1.1615 6.375C1.1615 7.46927 1.5962 8.51873 2.36997 9.2925L3.16497 10.0875L8.99997 15.9225L14.835 10.0875L15.63 9.2925C16.0132 8.90943 16.3172 8.45461 16.5247 7.95401C16.7321 7.45342 16.8388 6.91686 16.8388 6.375C16.8388 5.83313 16.7321 5.29657 16.5247 4.79598C16.3172 4.29539 16.0132 3.84056 15.63 3.4575Z",strokeOpacity:"0.8",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})},j=function(){return(0,g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[(0,g.jsx)("path",{d:"M18 6L6 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),(0,g.jsx)("path",{d:"M6 6L18 18",stroke:"#121417",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})},v={"Power liftgate":/\bPower liftgate\b/,"premium sound system":/\bpremium sound system\b/,"Power moonroof":/\bPower moonroof\b/,"audio system":/\baudio system\b/,"leather seats":/\bleather seats\b/,"sound system":/\bsound system\b/,"Apple CarPlay":/\bApple CarPlay\b/,Convertible:/\bConvertible\b/,"Air suspension":/\bAir suspension\b/},k=t(2884),y=function(n){var e=n.advert,t=n.onClose,i=e.address.split(","),r="";for(var o in v)if(v[o].test(e.accessories)){r=o.charAt(0).toUpperCase()+o.slice(1);break}var s=e.rentalConditions.split("\n"),c=s[0].split(":")[1],a=e.mileage.toLocaleString("en-US",{minimumFractionDigits:3,maximumFractionDigits:3}).replace(/\.000$/,"");return(0,g.jsxs)(l.zS,{children:[(0,g.jsx)(l.ve,{type:"button",onClick:t,children:(0,g.jsx)(j,{size:24})}),(0,g.jsx)(l.L6,{src:e.img||e.photoLink,alt:e.make,width:"270"}),(0,g.jsxs)(l.$Z,{children:[(0,g.jsx)(l.O6,{children:e.make}),(0,g.jsxs)(l.L4,{children:[e.model,","]}),(0,g.jsx)(l.O6,{children:e.year})]}),(0,g.jsxs)(l.UC,{children:[i[1]," | ",i[2]," | ",e.rentalCompany," | ",e.type]}),(0,g.jsxs)(l.UC,{children:[e.model," | ",e.id," | ",r]}),(0,g.jsx)(l.bv,{children:e.description}),(0,g.jsx)(l._L,{children:"Accessories and functionalities:"}),(0,g.jsxs)(l.UC,{children:[e.accessories[0]," | ",e.accessories[1]," |"," ",e.accessories[2]]}),(0,g.jsxs)(l.UC,{children:[e.functionalities[0]," | ",e.functionalities[1]," |"," ",e.functionalities[2]]}),(0,g.jsx)(l.f6,{children:"Rental Conditions:"}),(0,g.jsxs)(l.Ht,{children:[(0,g.jsxs)(l.LL,{children:["Minimum age : ",(0,g.jsx)("span",{children:c})]}),(0,g.jsx)(l.LL,{children:s[1]})]}),(0,g.jsxs)(l.Ht,{children:[(0,g.jsx)(l.LL,{children:s[2]}),(0,g.jsxs)(l.LL,{children:["Mileage: ",(0,g.jsx)("span",{children:a})]}),(0,g.jsxs)(l.LL,{children:["Price: ",(0,g.jsx)("span",{children:e.rentalPrice})]})]}),(0,g.jsx)(l.OO,{href:"tel:+380730000000",children:"Rental car"})]})},P=function(n){var e=n.advert,t=(0,s.useState)(!1),i=(0,o.Z)(t,2),r=i[0],d=i[1],f=(0,s.useState)(null),p=(0,o.Z)(f,2),x=p[0],h=p[1],m=(0,c.v9)(a.Tc),j=(0,c.v9)((function(n){return n.favorites.checkedFavorite[e.id]||!1})),P=(0,c.I0)(),w=function(){d(!r)},C=function(){w(),h(null)},L=e.address.split(","),z="";for(var M in v)if(v[M].test(e.accessories)){z=M.charAt(0).toUpperCase()+M.slice(1);break}return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(l.MZ,{children:[r&&x&&(0,g.jsx)(b,{onClose:C,children:(0,g.jsx)(y,{advert:e,onClose:C})}),(0,g.jsxs)(l.Z9,{children:[(0,g.jsx)(l.os,{type:"button",onClick:function(){return function(n){var e=m.some((function(e){return e.id===n.id})),t=!e,i=n.id;P(e?(0,u.zm)(n):(0,u._p)(n)),P((0,u.vs)({advertId:i,isChecked:t}))}(e)},checked:j,children:(0,g.jsx)(Z,{})}),(0,g.jsx)(l.L6,{src:e.img||e.photoLink,alt:e.make,width:"270"})]}),(0,g.jsxs)(l.P4,{children:[(0,g.jsxs)(l.jz,{children:[(0,g.jsx)(l.xL,{children:e.make}),(0,g.jsxs)(l.Eo,{children:[e.model,","]}),(0,g.jsx)(l.xL,{children:e.year})]}),(0,g.jsx)(l.xL,{children:e.rentalPrice})]}),(0,g.jsxs)(l.xG,{children:[L[1]," | ",L[2]," | ",e.rentalCompany," | Premium"," ",e.type," | ",e.model," | ",e.id," | ",z]}),(0,g.jsx)(k.r,{type:"button",onClick:function(){return function(n){w(),h(n)}(e)},children:"Learn more"})]},e.id)})}},8059:function(n,e,t){t.d(e,{$Z:function(){return A},CK:function(){return M},Eo:function(){return _},Gs:function(){return X},Ht:function(){return J},L4:function(){return $},L6:function(){return U},LL:function(){return N},MZ:function(){return O},O6:function(){return T},OO:function(){return Q},P4:function(){return q},UC:function(){return I},Z9:function(){return S},_L:function(){return R},bv:function(){return K},dF:function(){return W},f6:function(){return V},jz:function(){return E},os:function(){return F},ve:function(){return B},xG:function(){return H},xL:function(){return G},zS:function(){return D}});var i,r,o,s,c,a,l,u,d,f,p,x,h,g,m,b,Z,j,v,k,y,P,w,C,L=t(168),z=t(6487),M=z.ZP.ul(i||(i=(0,L.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 33px;\n  margin-top: 50px;\n"]))),O=z.ZP.li(r||(r=(0,L.Z)(["\n  width: calc((100% - 99px) / 4);\n  display: flex;\n  flex-direction: column;\n"]))),F=z.ZP.button(o||(o=(0,L.Z)(["\n  width: 30px;\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  z-index: 1;\n  top: 14px;\n  right: 14px;\n  svg {\n    fill: ",";\n    stroke: ",";\n  }\n"])),(function(n){return n.checked?"#3470FF":"none"}),(function(n){return n.checked?"#3470FF":"#fff"})),S=z.ZP.div(s||(s=(0,L.Z)(["\n  position: relative;\n"]))),U=z.ZP.img(c||(c=(0,L.Z)(["\n  border-radius: 15px;\n  width: 100%;\n  height: 280px;\n"]))),E=z.ZP.div(a||(a=(0,L.Z)(["\n  display: flex;\n  align-items: baseline;\n  gap: 3px;\n"]))),A=(0,z.ZP)(E)(l||(l=(0,L.Z)(["\n  margin-top: 10px;\n"]))),G=z.ZP.p(u||(u=(0,L.Z)(["\n  color: #121417;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),T=(0,z.ZP)(G)(d||(d=(0,L.Z)(["\n  font-size: 18px;\n"]))),_=(0,z.ZP)(G)(f||(f=(0,L.Z)(["\n  color: #3470ff;\n"]))),$=(0,z.ZP)(_)(p||(p=(0,L.Z)(["\n  font-size: 18px;\n"]))),q=z.ZP.div(x||(x=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-top: 14px;\n  margin-bottom: 8px;\n"]))),H=z.ZP.p(h||(h=(0,L.Z)(["\n  color: rgba(18, 20, 23, 0.5);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  margin-bottom: 28px;\n"]))),I=(0,z.ZP)(H)(g||(g=(0,L.Z)(["\n  margin-bottom: 4px;\n"]))),W=z.ZP.button(m||(m=(0,L.Z)(["\n  color: #3470ff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5;\n  text-decoration-line: underline;\n  display: flex;\n  justify-content: center;\n  margin: 100px auto;\n  background-color: transparent;\n  border: none;\n  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    color: #0b44cd;\n    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),B=z.ZP.button(b||(b=(0,L.Z)(["\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 16px;\n  right: 16px;\n"]))),D=z.ZP.div(Z||(Z=(0,L.Z)(["\n  padding: 40px;\n  position: relative;\n"]))),K=z.ZP.div(j||(j=(0,L.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.4;\n  margin-top: 10px;\n  margin-bottom: 24px;\n"]))),R=z.ZP.p(v||(v=(0,L.Z)(["\n  color: #121417;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.4;\n  margin-bottom: 9px;\n"]))),V=z.ZP.p(k||(k=(0,L.Z)(["\n  margin-top: 24px;\n  margin-bottom: 8px;\n"]))),J=z.ZP.div(y||(y=(0,L.Z)(["\n  display: flex;\n  gap: 8px;\n"]))),N=z.ZP.p(P||(P=(0,L.Z)(["\n  color: #363535;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  letter-spacing: -0.24px;\n  padding: 7px 14px;\n  display: block;\n  border-radius: 35px;\n  background: #f9f9f9;\n  span {\n    color: #3470ff;\n    font-weight: 600;\n  }\n"]))),Q=z.ZP.a(w||(w=(0,L.Z)(["\n  display: inline-flex;\n  padding: 12px 50px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 12px;\n  background: #3470ff;\n  color: #fff;\n  margin-top: 24px;\n  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),X=z.ZP.div(C||(C=(0,L.Z)(["\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.4;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  text-align: center;\n  color: red;\n"])))},2884:function(n,e,t){t.d(e,{c:function(){return a},r:function(){return c}});var i,r,o=t(168),s=t(6487),c=s.ZP.button(i||(i=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  height: 44px;\n  padding: 12px 99px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  border-radius: 12px;\n  background: #3470ff;\n  font-family: Manrope;\n  color: #fff;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 1.4;\n  border: none;\n  margin: 0 auto;\n  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    background-color: #0b44cd;\n    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  }\n"]))),a=(0,s.ZP)(c)(r||(r=(0,o.Z)(["\n  width: 136px;\n  margin: 0;\n  margin-top: 22px;\n"])))},7244:function(n,e,t){t.r(e),t.d(e,{default:function(){return _}});var i,r,o,s,c,a,l,u,d,f=t(9439),p=t(9434),x=t(2791),h=t(1945),g=t(4461),m=t(8059),b=t(1423),Z=t(1087),j=t(168),v=t(6487),k=t(6601),y=v.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  gap: 18px;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px;\n"]))),P=v.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=v.ZP.p(o||(o=(0,j.Z)(["\n  color: #8a8a89;\n  font-family: Manrope;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.28;\n  margin-bottom: 8px;\n"]))),C=(0,v.ZP)(k.ZP)(s||(s=(0,j.Z)(["\n  width: 224px;\n  z-index: 2;\n  height: 48px;\n"]))),L=(0,v.ZP)(k.ZP)(c||(c=(0,j.Z)(["\n  width: 125px;\n  z-index: 2;\n"]))),z=v.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n"]))),M=v.ZP.input(l||(l=(0,j.Z)(["\n  display: flex;\n  width: 160px;\n  height: 48px;\n  align-items: center;\n  flex-shrink: 0;\n\n  border: none;\n  padding-left: 18px;\n  background: #f7f7fb;\n  height: 48px;\n  color: #121417;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.1;\n\n  &:focus {\n    outline: 1px solid #8a8a89;\n  }\n"]))),O=(0,v.ZP)(M)(u||(u=(0,j.Z)(["\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  border-radius: 14px 0px 0px 14px;\n"]))),F=(0,v.ZP)(M)(d||(d=(0,j.Z)(["\n  border-radius: 0px 14px 14px 0px;\n"]))),S=t(2884),U=t(184),E=function(n){var e=n.onSearchClick,t=(0,p.v9)(h.OG),i=(0,p.v9)(h.xU),r=(0,Z.lr)(),o=(0,f.Z)(r,2),s=o[0],c=o[1],a=s.get("brand"),l=s.get("price"),u=s.get("minMileage"),d=s.get("maxMileage"),x=t.map((function(n){return{value:n.make,label:n.make}})),g=t.map((function(n){return{value:n.rentalPrice.slice(1),label:n.rentalPrice.slice(1)}})),m=function(n,e){var t=Object.fromEntries(s.entries());t[e]=n.value,c(t)},b=function(n,e){var t=Object.fromEntries(s.entries());t[e]=n.target.value,c(t)};return(0,U.jsxs)(y,{children:[(0,U.jsxs)(P,{children:[(0,U.jsx)(w,{children:"Car brand"}),(0,U.jsx)(C,{options:x,placeholder:"Enter the text",isLoading:i,onChange:function(n){m(n,"brand")}})]}),(0,U.jsxs)(P,{children:[(0,U.jsx)(w,{children:"Price/ 1 hour"}),(0,U.jsx)(L,{options:g,placeholder:"To $",isLoading:i,onChange:function(n){m(n,"price")}})]}),(0,U.jsxs)(P,{children:[(0,U.jsx)(w,{children:"\u0421ar mileage / km"}),(0,U.jsxs)(z,{children:[(0,U.jsx)(O,{type:"text",placeholder:"From",onChange:function(n){b(n,"minMileage")}}),(0,U.jsx)(F,{type:"text",placeholder:"To",onChange:function(n){b(n,"maxMileage")}})]})]}),(0,U.jsx)(S.c,{type:"button",onClick:function(){return function(n,t,i,r){e(n,t,i,r)}(a,l,u,d)},children:"Search"})]})},A=t(7200),G=function(){var n=(0,x.useState)(1),e=(0,f.Z)(n,2),t=e[0],i=e[1],r=(0,p.v9)(h.OG),o=(0,p.v9)(h.zh),s=(0,p.v9)(h.xU),c=(0,p.I0)();(0,x.useEffect)((function(){var n=new AbortController,e={page:t,signal:n.signal};return c(1===t?(0,g.GA)(e):(0,g.Vd)(e)),function(){n.abort()}}),[c,t]);return(0,U.jsxs)(U.Fragment,{children:[o&&(0,U.jsx)(m.Gs,{children:"Something went wrong, try again!"}),s&&(0,U.jsx)(A.a,{}),(0,U.jsx)(E,{onSearchClick:function(n,e,i,r){var o={page:t,make:n,rentalPrice:e,minMileage:i,maxMileage:r};c((0,g.ji)(o))}}),(0,U.jsx)(m.CK,{children:r.map((function(n){return(0,U.jsx)(b.q,{advert:n},n.id)}))}),(0,U.jsx)(m.dF,{type:"button",onClick:function(){i(t+1)},children:"Load more"})]})},T=t(8861);function _(){return(0,U.jsx)(T.P,{children:(0,U.jsx)(G,{})})}},1945:function(n,e,t){t.d(e,{OG:function(){return i},Tc:function(){return s},xU:function(){return r},zh:function(){return o}});var i=function(n){return n.adverts.cars},r=function(n){return n.adverts.isLoading},o=function(n){return n.adverts.error},s=function(n){return n.favorites.list}}}]);
//# sourceMappingURL=244.69f8b195.chunk.js.map