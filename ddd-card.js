/**
 * Copyright 2025 p0tater
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDD, DDDPulseEffectSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js"; 
/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */

export class DddCard extends DDDPulseEffectSuper(I18NMixin((DDD))) {

  



  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.title = "";
    this.campus = "";
    this.image = "";
    this.link = "";
    this.description = "";
    this.dddprimary = "2";
  }

  connectedCallback() {
    super.connectedCallback();
    const cardList = document.querySelector('ddd-card-list');
    if (cardList) {
      
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.type === 'attributes' && mutation.attributeName === 'data-primary') {
            this.colorChange(cardList.getAttribute('data-primary'));
          }
        }
      });
      observer.observe(cardList, { attributes: true });
    }
  }

  colorChange(newValue) {   
    const accentDiv = this.shadowRoot.querySelector('.accent');
    if (accentDiv) {
      this.dddprimary = "" + newValue;
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String, reflect: true },
      campus: { type: String, reflect: true },
      image: { type: String, reflect: true },
      description: { type: String, reflect: true },
      link: { type: String, reflect: true },
      dddprimary: { type: String, reflect: true, attribute: "ddd-primary" },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`

      

      :host {
        margin: var(--ddd-spacing-1);
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        border-radius: var(--ddd-radius-xs);
          --component-color: var(
            --lowContrast-override,
            var(
              --ddd-theme-accent,
              var(--ddd-theme-bgContrast, var(--ddd-theme-default-white))
            )
          );
          --component-background-color: var(
            --ddd-theme-primary,
            var(--ddd-theme-default-link)
          );
          --component-border-color: var(--component-color);
      }
      .card {
        margin: var(--ddd-spacing-2);
        border: var(--ddd-border-xs); 
        border-radius: var(--ddd-radius-sm);
        background-color: var(--ddd-accent-6);
        box-shadow: var(--ddd-boxShadow-md);
           }
      .content {

        margin:0;
      }

      img {
        width: 100%;
        border-top-left-radius: var(--ddd-radius-sm);
        border-top-right-radius: var(--ddd-radius-sm);
        max-width: 500px;
      }
      p{
        color: var(--ddd-theme-default-coalyGray);
        font-family: var(--ddd-font-primary); 
        font-size: var(--ddd-font-size-3xs);
        font-weight: var(--ddd-font-weight-regular);
        letter-spacing: var(--ddd-ls-36-sm);
        height: 119px;
        line-height: var(--ddd-lh-150);
        margin-top: 0;
      }
      h1 {
        font-size: var(--ddd-font-size-ms); 
        font-weight: var(--ddd-font-weight-bold);
        margin: var(--ddd-spacing-0);
        margin-bottom: var(--ddd-spacing-2);
        color: var(--ddd-theme-default-nittanyNavy);
        font-family: var(--ddd-font-primary);
      }
      .accent{
        border-top-left-radius: var(--ddd-radius-sm);
        border-top-right-radius: var(--ddd-radius-sm);
        border-bottom: var(--ddd-border-lg);
        border-bottom-width: 12px;
        display: flex;
      }

      .container {
        margin-bottom: var(--ddd-spacing-6); 
        margin-top: var(--ddd-spacing-4);
        margin-left: var(--ddd-spacing-4);
        margin-right: var(--ddd-spacing-4);
      }
   
      .button{
        padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-xs);
        font-family: var(--ddd-font-primary); 
        font-size: var(--ddd-font-size-4xs);
        border: var(--ddd-border-xs);
        font-weight: var(--ddd-font-weight-bold);
        display: block;
        text-align: center;
        text-decoration: none;
        background-color: var(--ddd-theme-default-link)  !important ;
        color: var(--ddd-theme-default-white) !important;
      }
      a:hover {
        background-color: var(--ddd-theme-default-nittanyNavy) !important;
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
      }
      @media screen and (max-width: 1000px) {
        .card{
          max-width: unset;
        }

        p{
          font-size: var(--ddd-font-size-4xs);
        }
        .content {
        height: 175px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
         }

       

    } 
    @media screen and (max-width: 1300px){
          p{
            display: contents;
          }
          .content {
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
         }
        }
        
      
    `];
  }

  // haxProperty definition
  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }
    //https://images.ctfassets.net/ni9rh5nu0d99/1paFaX2Dc7iHh9Z6K7mIim/1427b9970ff21dd9c8a770067638efc1/abington-02.jpg
  // Lit render the HTML
  render() {
    return html`    
<div class="card">
  <div class="accent" style="border-color: var(--ddd-primary-${this.dddprimary});">
    <img src="${this.image}" alt="placeholder"/> 
  </div>
  <div class="container">
    <h1>${this.campus}</h1>
    <div class="content">
      <p>${this.description}</p>
      <a class="button" href="${this.link}">Explore ></a>
    </div>
  </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */

}

globalThis.customElements.define(DddCard.tag, DddCard);