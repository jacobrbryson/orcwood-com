import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  /** Page title (the " — Orcwood Games" suffix is added automatically). */
  title: string;
  /** Meta description, ~150-160 chars. */
  description: string;
  /** Absolute path for this page, e.g. "/games/family-chores". Defaults to "/". */
  path?: string;
  /** Image path or absolute URL used for Open Graph / Twitter cards. */
  image?: string;
  /** Open Graph type. Defaults to "website". */
  type?: string;
  /** Optional JSON-LD structured data object to embed. */
  jsonLd?: Record<string, unknown>;
  /** When true, mark the page noindex (e.g. error/not-found pages). */
  noindex?: boolean;
}

const BASE_URL = 'https://orcwood.com';
const SITE_NAME = 'Orcwood Games';
const DEFAULT_IMAGE = '/assets/logo-og-games.png';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly doc: Document
  ) {}

  /** Build an absolute URL from a path or pass-through an existing absolute URL. */
  private absolute(pathOrUrl: string): string {
    if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
    return `${BASE_URL}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`;
  }

  update(data: SeoData): void {
    const fullTitle =
      data.title === SITE_NAME ? data.title : `${data.title} — ${SITE_NAME}`;
    const url = this.absolute(data.path ?? '/');
    const image = this.absolute(data.image ?? DEFAULT_IMAGE);
    const type = data.type ?? 'website';

    this.title.setTitle(fullTitle);

    this.setNamed('description', data.description);

    this.setProperty('og:type', type);
    this.setProperty('og:site_name', SITE_NAME);
    this.setProperty('og:title', fullTitle);
    this.setProperty('og:description', data.description);
    this.setProperty('og:url', url);
    this.setProperty('og:image', image);

    this.setNamed('twitter:card', 'summary_large_image');
    this.setNamed('twitter:title', fullTitle);
    this.setNamed('twitter:description', data.description);
    this.setNamed('twitter:image', image);

    this.setNamed(
      'robots',
      data.noindex ? 'noindex, follow' : 'index, follow'
    );

    this.setCanonical(url);
    this.setJsonLd(data.jsonLd);
  }

  private setNamed(name: string, content: string): void {
    this.meta.updateTag({ name, content });
  }

  private setProperty(property: string, content: string): void {
    this.meta.updateTag({ property, content });
  }

  private setCanonical(url: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private setJsonLd(data?: Record<string, unknown>): void {
    const id = 'structured-data';
    const existing = this.doc.getElementById(id);
    if (existing) existing.remove();
    if (!data) return;

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }
}
