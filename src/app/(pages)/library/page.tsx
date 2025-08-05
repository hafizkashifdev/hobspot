import { LibraryImage } from "@/assets";
import CommonImgMapPage from "@/components/common-img-map-page";
import React from "react";

const areas = [
  {
    alt: "Email",
    title: "Email",
    href: "/library-17",
    coords: "58,140,233,195",
    shape: "rect",
  },
  {
    alt: "Whatsapp",
    title: "Whatsapp",
    href: "/library-21",
    coords: "70,593,312,648",
    shape: "rect",
  },
  {
    alt: "Meeting Scheduler",
    title: "Meeting Scheduler",
    href: "/library-18",
    coords: "35,892,360,971",
    shape: "rect",
  },
  {
    alt: "Files",
    title: "Files",
    href: "/library-19",
    coords: "32,1594,190,1658",
    shape: "rect",
  },
  {
    alt: "Files & Folders",
    title: "Files & Folders",
    href: "/library-19",
    coords: "53,1680,351,1737",
    shape: "rect",
  },
  {
    alt: "Stock Images",
    title: "Stock Images",
    href: "/library-20",
    coords: "61,2150,347,2213",
    shape: "rect",
  },
  {
    alt: "Documents",
    title: "Documents",
    href: "/library-01",
    coords: "33,2464,258,2524",
    shape: "rect",
  },
  {
    alt: "Create New Folder",
    title: "Create New Folder",
    href: "/library-02",
    coords: "61,2550,397,2611",
    shape: "rect",
  },
  {
    alt: "Grid View",
    title: "Grid View",
    href: "/library-04",
    coords: "49,2848,290,2903",
    shape: "rect",
  },
  {
    alt: "Playbook",
    title: "Playbook",
    href: "/library-05",
    coords: "32,3180,260,3238",
    shape: "rect",
  },
  {
    alt: "Create New Folder",
    title: "Create New Folder",
    href: "/library-11",
    coords: "60,3270,398,3333",
    shape: "rect",
  },
  {
    alt: "Grid View",
    title: "Grid View",
    href: "/library-15",
    coords: "56,3542,270,3594",
    shape: "rect",
  },
  {
    alt: "Snippets",
    title: "Snippets",
    href: "/library-06",
    coords: "28,3873,214,3936",
    shape: "rect",
  },
  {
    alt: "Create New Folder",
    title: "Create New Folder",
    href: "/library-12",
    coords: "51,3952,384,4017",
    shape: "rect",
  },
  {
    alt: "Grid View",
    title: "Grid View",
    href: "/library-16",
    coords: "47,4231,260,4282",
    shape: "rect",
  },
  {
    alt: "Coaching Playlists",
    title: "Coaching Playlists",
    href: "/library-07",
    coords: "21,4570,367,4631",
    shape: "rect",
  },
  {
    alt: "File Recording",
    title: "File Recording",
    href: "/library-08",
    coords: "42,5016,344,5084",
    shape: "rect",
  },
  {
    alt: "File Recording",
    title: "File Recording",
    href: "/library-09",
    coords: "61,5096,358,5161",
    shape: "rect",
  },
  {
    alt: "All Calls",
    title: "All Calls",
    href: "/library-10",
    coords: "58,5339,265,5391",
    shape: "rect",
  },
  {
    alt: "Upload Document",
    title: "Upload Document",
    href: "/library-03",
    coords: "590,2545,925,2610",
    shape: "rect",
  },
  {
    alt: "Create Playbook",
    title: "Create Playbook",
    href: "/library-13",
    coords: "593,3270,906,3324",
    shape: "rect",
  },
  {
    alt: "Create Snippet",
    title: "Create Snippet",
    href: "/library-14",
    coords: "588,3952,872,4015",
    shape: "rect",
  },
];

const LibraryPage = () => {
  return (
    <CommonImgMapPage
      pageTitle={`Library`}
      image={LibraryImage}
      backRoute="/"
      areas={areas}
    />
  );
};

export default LibraryPage;
