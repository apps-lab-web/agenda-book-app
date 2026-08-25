import{Dc as a}from"./chunk-BKU4XSUQ.js";import{ba as o,fa as i,ya as s}from"./chunk-XH7EQUCG.js";var n=class t{constructor(e){this.iconService=e;this.registerCustomIcons(),this.isDark()&&this.applyDark(),this.syncElectronTheme(this.isDark())}DARK_THEME_ID="dark-theme-stylesheet";NZ_DARK_ID="nz-dark-stylesheet";STORAGE_KEY="agenda-book-theme";isDark=s(this.loadPreference());toggle(){this.isDark.update(r=>!r),this.isDark()?this.applyDark():this.removeDark();let e=this.isDark()?"dark":"light";localStorage.setItem(this.STORAGE_KEY,e),this.syncElectronTheme(this.isDark())}applyDark(){if(document.getElementById(this.DARK_THEME_ID))return;let e=document.createElement("link");e.id=this.DARK_THEME_ID,e.rel="stylesheet",e.href="dark-theme.css",document.head.appendChild(e),document.body.classList.add("is-dark")}removeDark(){document.getElementById(this.NZ_DARK_ID)?.remove(),document.getElementById(this.DARK_THEME_ID)?.remove(),document.body.classList.remove("is-dark")}loadPreference(){let e=localStorage.getItem(this.STORAGE_KEY);return e?e==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}syncElectronTheme(e){window.electronAPI?.setNativeTheme(e?"dark":"light")}registerCustomIcons(){this.iconService.addIconLiteral("theme:sun",`<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/>
      </svg>`),this.iconService.addIconLiteral("theme:moon",`<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>`),this.iconService.addIconLiteral("google:logo",`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>`),this.iconService.addIconLiteral("custom:sparkles",`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 2C5 2 5.5 5 6.5 6S10 7 10 7 7 7.5 6 8.5 5 12 5 12s-.5-3-1.5-4S0 7 0 7s3-.5 4-1.5S5 2 5 2z" transform="translate(3 0) scale(1.1)"/>
        <path d="M5 2C5 2 5.5 5 6.5 6S10 7 10 7 7 7.5 6 8.5 5 12 5 12s-.5-3-1.5-4S0 7 0 7s3-.5 4-1.5S5 2 5 2z" transform="translate(12 8) scale(0.9)"/>
        <path d="M5 2C5 2 5.5 5 6.5 6S10 7 10 7 7 7.5 6 8.5 5 12 5 12s-.5-3-1.5-4S0 7 0 7s3-.5 4-1.5S5 2 5 2z" transform="translate(0 15) scale(0.6)"/>
      </svg>`),this.iconService.addIconLiteral("layout:sidebar",`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="20" height="18" x="2" y="3" rx="2" fill="none"/>
        <path d="M9 3v18" fill="none"/>
      </svg>`)}static \u0275fac=function(r){return new(r||t)(i(a))};static \u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"})};export{n as a};
