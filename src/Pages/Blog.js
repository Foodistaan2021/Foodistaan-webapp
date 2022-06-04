import React from 'react';
import BlogFilter from '../components/Blogs/BlogFilter/BlogFilter';
import BlogHeader from '../components/Blogs/BlogHeader/BlogHeader';
import BlogList from '../components/Blogs/BlogList/BlogList';
import Layout from '../components/common/layout/Layout';
import Header from "../components/common/header";
import footer from '../components/common/footer';

const DUMMY_BLOGS = [
  {
    id: 1,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 2,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 3,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 4,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 5,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 6,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 7,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 8,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 9,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 10,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },

  {
    id: 11,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 12,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 13,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 14,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 15,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 16,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
  {
    id: 17,
    title: 'Title of the Article',
    dateTime: 'Date Time',
    blog: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mauris egestas, congue diam non, sagittis nisl. Maecenas tincidunt est mi, nec interdum nunc finibus non. Duis lobortis augue ac diam fringilla, sed luctus ante tempus. Donec quis nulla lectus. Praesent tempus commodo mattis. Phasellus pretium tortor sed justo pretium semper. Nulla id fermentum erat, at cursus urna. Aliquam sit amet neque sapien. Aenean vitae lacus ac sem tincidunt egestas vel id dui. Morbi vehicula libero quis nunc elementum ornare. Sed iaculis diam at libero aliquet egestas. Aliquam vitae lectus lacus.',
  },
];

const Blog = () => {
  return (
    <div>
        <Header/>
        <BlogHeader />
        <BlogFilter />
        <BlogList />



    </div>
  );
};

export default Blog;
