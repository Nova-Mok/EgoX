import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Collection_dropdown2 from "../../components/dropdown/collection_dropdown2";
import {
  collectionDropdown2_data,
  EthereumDropdown2_data,
} from "../../data/dropdown";
import { FileUploader } from "react-drag-drop-files";
import Proparties_modal from "../../components/modal/proparties_modal";
import { useDispatch } from "react-redux";
import { showPropatiesModal } from "../../redux/counterSlice";
import Meta from "../../components/Meta";

const Create = () => {
  const fileTypes = [
    "JPG",
    "PNG",
    "GIF",
    "SVG",
    "MP4",
    "WEBM",
    "MP3",
    "WAV",
    "OGG",
    "GLB",
    "GLTF",
  ];
  const [file, setFile] = useState("");

  const dispatch = useDispatch();

  const handleChange = (file) => {
    setFile(file.name);
  };

  const popupItemData = [
    {
      id: 1,
      name: "Properties",
      text: "Textual traits that show up as rectangles.",
      icon: "proparties-icon",
    },
    /*{
      id: 2,
      name: "levels",
      text: "Numerical traits that show as a progress bar.",
      icon: "level-icon",
    },
    {
      id: 3,
      name: "stats",
      text: "Numerical traits that just show as numbers.",
      icon: "stats-icon",
    }, */
  ];
  return (
    <div>
      <Meta title="Create || EgoX | NFT Marketplace" />
      {/* <!-- Create --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-4xl font-medium dark:text-white">
            Create
          </h1>

          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload --> */}
            <div className="mb-6">
              <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                Image, Video, Audio, or 3D Model
                <span className="text-red">*</span>
              </label>

              {file ? (
                <p className="dark:text-jacarta-300 text-2xs mb-3">
                  successfully uploaded : {file}
                </p>
              ) : (
                <p className="dark:text-jacarta-300 text-2xs mb-3">
                  Drag or choose your file to upload
                </p>
              )}

              <div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
                <div className="relative z-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-500 mb-4 inline-block dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                  </svg>
                  <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                    JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max
                    size: 100 MB
                  </p>
                </div>
                <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100 ">
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                    classes="file-drag"
                    maxSize={100}
                    minSize={0}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Name --> */}
            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Name<span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Item name"
                required
              />
            </div>

            {/* <!-- External Link --> */}
            <div className="mb-6">
              <label
                htmlFor="item-external-link"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Website
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
                
              </p>
              <input
                type="url"
                id="item-external-link"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="https://yoursite.io/item/123"
              />
            </div>

            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Description
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
               
              </p>
              <textarea
                id="item-description"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                rows="4"
                required
                placeholder="Provide a detailed description of your item."
              ></textarea>
            </div>

            {/* <!-- Collection --> */}
            <div className="relative">
              <div>
                <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                  Collection
                </label>
                <div className="mb-3 flex items-center space-x-2">
                  <p className="dark:text-jacarta-300 text-2xs">
                  Select which collection this NFT should be uploaded to.
                    <Tippy
                      theme="tomato-theme"
                      content={
                        <span>
                          Select the one collection in which you like to upload your NFT.
                        </span>
                      }
                    >
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                        </svg>
                      </span>
                    </Tippy>
                  </p>
                </div>
              </div>

              {/* dropdown */}
              <div className="dropdown relative mb-4 cursor-pointer ">
                <Collection_dropdown2 data={collectionDropdown2_data} />
              </div>
            </div>

            {/* <!-- Properties --> */}
            {popupItemData.map(({ id, name, text, icon }) => {
              return (
                <div
                  key={id}
                  className="dark:border-jacarta-600 border-jacarta-100 relative border-b py-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <svg className="icon fill-jacarta-700 mr-2 mt-px h-4 w-4 shrink-0 dark:fill-white">
                        <use xlinkHref={`/icons.svg#icon-${icon}`}></use>
                      </svg>

                      <div>
                        <label className="font-display text-jacarta-700 block dark:text-white">
                          {name}
                        </label>
                        <p className="dark:text-jacarta-300">{text}</p>
                      </div>
                    </div>
                    <button
                      className="group dark:bg-jacarta-700 hover:bg-accent border-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-white hover:border-transparent"
                      onClick={() => dispatch(showPropatiesModal())}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="fill-accent group-hover:fill-white"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}

            <Proparties_modal />

            {/* <!-- Properties --> */}

            {/* <!-- Unlockable Content --> */}

            {/* <!-- Explicit & Sensitive Content --> */}


            {/* <!-- Supply --> */}
            <div className="mb-6">
              <label
                htmlFor="item-supply"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Supply
              </label>

              <div className="mb-3 flex items-center space-x-2">
                <p className="dark:text-jacarta-300 text-2xs">
                  The number of items that can be minted. No gas cost to you!
                  <Tippy
                    content={
                      <span>
                        Setting your asset as explicit and sensitive content,
                        like pornography and other not safe for work (NSFW)
                        content, will protect users with safe search while
                        browsing EgoX.
                      </span>
                    }
                  >
                    <span className="inline-block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        className="dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                      </svg>
                    </span>
                  </Tippy>
                </p>
              </div>

              <input
                type="text"
                id="item-supply"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="1"
              />
            </div>

            {/* <!-- Blockchain --> */}
            <div className="mb-6">
              <label
                htmlFor="item-supply"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Blockchain
              </label>
              <div className="mb-3 flex items-center space-x-2">
                <p className="dark:text-jacarta-300 text-2xs">
                Choose which blockchain you would like to deploy this NFT on.
                </p>
              </div>

              {/* dropdown */}
              <div className="dropdown relative mb-4 cursor-pointer ">
                <Collection_dropdown2 data={EthereumDropdown2_data} />
              </div>
            </div>

            {/* <!-- Freeze metadata --> */}
            

            {/* <!-- Submit --> */}
            <button
              disabled
              className="bg-accent-lighter cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
            >
              Create
            </button>
          </div>
        </div>
      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
