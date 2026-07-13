import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { getAllPosts } from '../utils/blogUtils';

const BlogList = () => {
    const posts = getAllPosts();

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="blog-page">
            <Helmet>
                <title>Blog | Doveleaf Drycleaners — Expert Garment Care Tips & Advice</title>
                <meta name="description" content="Read expert tips on stain removal, fabric care, dry cleaning, and laundry from the professional garment care team at Doveleaf Drycleaners. Practical guides for every fabric type." />
                <link rel="canonical" href="https://doveleaf.co.ke/blog" />
                <meta property="og:title" content="Blog | Doveleaf Drycleaners" />
                <meta property="og:description" content="Expert tips on stain removal, fabric care, and professional garment care." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://doveleaf.co.ke/blog" />
            </Helmet>

            {/* Hero Banner */}
            <section className="blog-hero">
                <div className="container">
                    <h1 className="blog-hero-title">Our Blog</h1>
                    <p className="blog-hero-subtitle">
                        Expert advice on garment care, stain removal, and professional fabric treatment
                    </p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="container">
                    {posts.length === 0 ? (
                        <div className="blog-empty">
                            <h2>Coming Soon</h2>
                            <p>We are working on great content. Check back soon!</p>
                        </div>
                    ) : (
                        <div className="blog-grid">
                            {posts.map((post) => (
                                <article key={post.slug} className="blog-card">
                                    <Link to={`/blog/${post.slug}`} className="blog-card-link">
                                        {post.coverImage && (
                                            <div className="blog-card-image-wrapper">
                                                <img
                                                    src={post.coverImage}
                                                    alt={post.title}
                                                    className="blog-card-image"
                                                    loading="lazy"
                                                />
                                            </div>
                                        )}
                                        <div className="blog-card-content">
                                            <div className="blog-card-meta">
                                                <span className="blog-card-date">
                                                    <Calendar size={14} />
                                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                                </span>
                                                <span className="blog-card-reading-time">
                                                    <Clock size={14} />
                                                    {post.readingTime}
                                                </span>
                                            </div>
                                            <h2 className="blog-card-title">{post.title}</h2>
                                            <p className="blog-card-excerpt">{post.excerpt}</p>
                                            <span className="blog-card-read-more">
                                                Read Full Article <ChevronRight size={16} />
                                            </span>
                                        </div>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogList;
