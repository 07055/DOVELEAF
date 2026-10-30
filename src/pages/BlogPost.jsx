import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Calendar, Clock, ArrowLeft, User, MessageCircle } from 'lucide-react';
import { getPostBySlug } from '../utils/blogUtils';
import AdSenseUnit from '../components/AdSenseUnit';
import AuthorBio from '../components/AuthorBio';

const AD_CLIENT = 'ca-pub-9132897909170105';
const AD_SLOT_HEADER = '0000000000';
const AD_SLOT_FOOTER = '0000000001';

const SITE_URL = 'https://doveleaf.co.ke';
const SITE_NAME = 'Doveleaf Drycleaners';

const BlogPost = () => {
    const { slug } = useParams();
    const post = getPostBySlug(slug);

    const adKeyHeader = useMemo(() => `ad-h-${slug}`, [slug]);
    const adKeyFooter = useMemo(() => `ad-f-${slug}`, [slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="blog-page">
                <div className="container" style={{ padding: '6rem 1rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>
                        Article Not Found
                    </h1>
                    <p style={{ color: '#666', marginBottom: '2rem' }}>
                        The article you are looking for does not exist or may have been removed.
                    </p>
                    <Link to="/blog" className="btn btn-primary">
                        <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
                        Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-KE', options);
    };

    const articleUrl = `${SITE_URL}/blog/${post.slug}`;
    const absoluteCoverImage = post.coverImage
        ? post.coverImage.startsWith('http')
            ? post.coverImage
            : `${SITE_URL}${post.coverImage}`
        : '';

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'BlogPosting',
                headline: post.title,
                description: post.excerpt,
                datePublished: post.date,
                dateModified: post.dateModified,
                wordCount: post.wordCount,
                author: {
                    '@type': 'Organization',
                    name: post.author,
                    url: SITE_URL,
                },
                publisher: {
                    '@type': 'Organization',
                    name: SITE_NAME,
                    url: SITE_URL,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${SITE_URL}/doveleaf-logo.svg`,
                    },
                },
                mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': articleUrl,
                },
                ...(absoluteCoverImage && {
                    image: {
                        '@type': 'ImageObject',
                        url: absoluteCoverImage,
                    },
                }),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: SITE_URL,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Blog',
                        item: `${SITE_URL}/blog`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: post.title,
                        item: articleUrl,
                    },
                ],
            },
        ],
    };

    return (
        <div className="blog-page">
            <Helmet>
                <title>{post.title} | THE LAUNDRY GURU</title>
                <meta name="description" content={post.excerpt} />
                <link rel="canonical" href={articleUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={articleUrl} />
                <meta property="og:site_name" content={SITE_NAME} />
                {absoluteCoverImage && (
                    <meta property="og:image" content={absoluteCoverImage} />
                )}
                <meta property="article:published_time" content={post.date} />
                <meta property="article:modified_time" content={post.dateModified} />
                <meta property="article:author" content={post.author} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.excerpt} />
                {absoluteCoverImage && (
                    <meta name="twitter:image" content={absoluteCoverImage} />
                )}
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* Back Navigation */}
            <div className="blog-post-nav">
                <div className="container">
                    <Link to="/blog" className="blog-back-link">
                        <ArrowLeft size={18} />
                        Back to All Articles
                    </Link>
                </div>
            </div>

            {/* Article */}
            <article className="blog-post-article">
                <div className="container">
                    <div className="blog-post-wrapper">
                        {/* Article Header */}
                        <header className="blog-post-header">
                            {post.coverImage && (
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="blog-post-cover"
                                    loading="eager"
                                />
                            )}
                            <h1 className="blog-post-title">{post.title}</h1>
                            <div className="blog-post-meta">
                                <span className="blog-post-author">
                                    <User size={16} />
                                    {post.author}
                                </span>
                                <span className="blog-post-date">
                                    <Calendar size={16} />
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                </span>
                                <span className="blog-post-reading-time">
                                    <Clock size={16} />
                                    {post.readingTime}
                                </span>
                            </div>
                        </header>

                        {/* AD SLOT #1 */}
                        <div className="blog-post-ad">
                            <AdSenseUnit
                                key={adKeyHeader}
                                adClient={AD_CLIENT}
                                adSlot={AD_SLOT_HEADER}
                                format="horizontal"
                            />
                        </div>

                        {/* Article Body */}
                        <div className="blog-post-body">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.body}
                            </ReactMarkdown>
                        </div>

                        {/* AD SLOT #2 */}
                        <div className="blog-post-ad">
                            <AdSenseUnit
                                key={adKeyFooter}
                                adClient={AD_CLIENT}
                                adSlot={AD_SLOT_FOOTER}
                                format="horizontal"
                            />
                        </div>

                        {/* Consulting WhatsApp CTA */}
                        <div
                            className="blog-consulting-cta"
                            style={{
                                margin: '2.5rem 0',
                                padding: '2rem 1.5rem',
                                background: 'linear-gradient(135deg, #0d2818 0%, #041f11 100%)',
                                borderRadius: '14px',
                                color: '#ffffff',
                                textAlign: 'center',
                                border: '1px solid rgba(37, 211, 102, 0.25)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                            }}
                        >
                            <h3 style={{ color: '#ffffff', fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.65rem' }}>
                                Commercial Laundry Advisory & Technical Support
                            </h3>
                            <p style={{ color: '#e2e8f0', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 1.4rem', lineHeight: 1.6 }}>
                                Looking to set up a commercial plant, optimize fabric processing, or turnaround an existing laundry operation? Connect directly with <strong>THE LAUNDRY GURU</strong> team led by Joe Mweri.
                            </p>
                            <a
                                href="https://wa.me/254713326439?text=Hello%20The%20Laundry%20Guru%2C%20I%20would%20like%20to%20inquire%20about%20your%20commercial%20laundry%20consulting%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.6rem',
                                    backgroundColor: '#25D366',
                                    color: '#ffffff',
                                    padding: '0.85rem 1.75rem',
                                    borderRadius: '50px',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)'
                                }}
                            >
                                <MessageCircle size={20} /> Chat With The Laundry Guru on WhatsApp (0713326439)
                            </a>
                        </div>

                        {/* Author Bio Box */}
                        <AuthorBio author={post.author} />

                        {/* Back to Blog CTA */}
                        <div className="blog-post-footer">
                            <Link to="/blog" className="btn btn-primary">
                                <ArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
                                View All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
