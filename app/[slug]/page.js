'use client';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';

const blogs = [
  {
    slug: 'money-heist-s1-e1',
    title: 'Money Heist - Season 1 Episode 1',
    image: '/mh.1.jpg',
    content: 'The Professor recruits eight skilled criminals to execute a plan to print billions of euros in the Royal Mint of Spain. With code names and strict rules, the team takes hostages and begins the operation under the watchful eye of the Professor from an external location.',
  },
  {
    slug: 'money-heist-s1-e2',
    title: 'Money Heist - Season 1 Episode 2',
    image: '/mh.2.jpg',
    content: 'Raquel, the lead inspector, begins negotiations while the group inside the Mint starts to clash. The Professor maneuvers behind the scenes, staying close to the investigation while manipulating things in his favor.',
  },
  {
    slug: 'money-heist-s1-e3',
    title: 'Money Heist - Season 1 Episode 3',
    image: '/mh.3.jpg',
    content: 'Berlin asserts control over the crew, causing tension. Nairobi tries to mediate as Tokyo and others question the chain of command. Meanwhile, the Professor starts to build a connection with Raquel outside the Mint.',
  },
  {
    slug: 'money-heist-s1-e4',
    title: 'Money Heist - Season 1 Episode 4',
    image: '/mh.4.jpeg',
    content: 'The police begin to close in on clues that may expose the Professor. Inside the Mint, tempers flare as plans begin to unravel. A critical mistake threatens to expose one of the robbers.',
  },
  {
    slug: 'money-heist-s1-e5',
    title: 'Money Heist - Season 1 Episode 5',
    image: '/mh.5.jpg',
    content: 'Tokyo’s reckless behavior causes disruptions inside the Mint. Raquel starts piecing together evidence about Salva, unaware of his true identity as the Professor. Trust starts to erode within the team.',
  },
  {
    slug: 'money-heist-s1-e6',
    title: 'Money Heist - Season 1 Episode 6',
    image: '/mh.6.jpg',
    content: 'Denver faces a crisis when he’s ordered to kill a hostage. His decision leads to unexpected consequences, and a new bond is formed. The group begins to splinter emotionally.',
  },
  {
    slug: 'money-heist-s1-e7',
    title: 'Money Heist - Season 1 Episode 7',
    image: '/mh.7.jpg',
    content: 'Arturo plans a rebellion from within. The Professor misleads the police with clever tricks and diversions. Berlin enforces brutal control to maintain order among the hostages and crew.',
  },
  {
    slug: 'money-heist-s1-e8',
    title: 'Money Heist - Season 1 Episode 8',
    image: '/mh.8.jpg',
    content: 'The situation grows more unstable. A standoff pushes the group to the edge. Raquel becomes more suspicious of Salva while the team faces technical difficulties.',
  },
  {
    slug: 'money-heist-s1-e9',
    title: 'Money Heist - Season 1 Episode 9',
    image: '/mh.9.jpg',
    content: 'Hostages begin a revolt, leading to chaos. The Professor faces a close call that nearly blows his cover. Raquel digs deeper into Salva’s background.',
  },
  {
    slug: 'money-heist-s1-e10',
    title: 'Money Heist - Season 1 Episode 10',
    image: '/mh.10.jpg',
    content: 'Tokyo is expelled from the Mint. The Professor must now rescue her without exposing himself. Internal trust among the robbers continues to fall apart.',
  },
  {
    slug: 'money-heist-s1-e11',
    title: 'Money Heist - Season 1 Episode 11',
    image: '/mh.11.jpg',
    content: 'Flashbacks reveal Berlin’s past and illness. The crew confronts betrayal and emotional trauma. Raquel grows more desperate for answers.',
  },
  {
    slug: 'money-heist-s1-e12',
    title: 'Money Heist - Season 1 Episode 12',
    image: '/mh.12.jpg',
    content: 'Raquel struggles with her feelings for Salva, suspecting something is off. The Professor juggles love and leadership while preparing for Tokyo’s return.',
  },
  {
    slug: 'money-heist-s1-e13',
    title: 'Money Heist - Season 1 Episode 13',
    image: '/mh.13.jpg',
    content: 'An insider betrayal shakes the entire plan. The police close in on the Professor, who must now risk everything to stay hidden.',
  },
  {
    slug: 'money-heist-s1-e14',
    title: 'Money Heist - Season 1 Episode 14',
    image: '/mh.14.jpg',
    content: 'The group prepares for the final escape. A new hostage crisis emerges, threatening the plan. Raquel races against time to connect the dots.',
  },
  {
    slug: 'money-heist-s1-e15',
    title: 'Money Heist - Season 1 Episode 15',
    image: '/mh.15.jpg',
    content: 'The climax of the heist arrives. As emotions peak and bullets fly, not everyone will make it out alive. The Professor’s plan comes full circle.',
  },
];

export default function BlogDetails() {
  const params = useParams();
  const slug = params?.slug;

  const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) notFound();


  return (
    <div className="blog-details" style={{ padding: '1rem' }}>
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', maxWidth: '600px' }} />
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>{blog.content}</p>
    </div>
  );
}