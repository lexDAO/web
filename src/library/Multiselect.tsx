import { useState } from 'react'
import Dropdown from './Dropdown'

const Multiselect = ({ tag, selectedTag, setSelectedTag }: any) => {
  // state showing if dropdown is open or closed
  const [dropdown, setDropdown] = useState(false)
  // managing dropdown items (list of dropdown items)
  const [items, setItems] = useState([
    'First Amendment',
    'Accountability',
    'Alternative Dispute Resolution',
    'Anonymity',
    'Applications',
    'Artificial Intelligence',
    'Blockchain',
    'Browsers',
    'Central Bank',
    'Civil Liability',
    'Commodities',
    'Confidentiality',
    'Compliance',
    'Computational Security',
    'Conflict Resolution Framework',
    'Consent Management',
    'Consumer Protection',
    'Consensus',
    'Crowdfunding',
    'Cryptocurrency',
    'Cryptography',
    'Cybersecurity',
    'DAO',
    'Data Management',
    'Data Provenance',
    'DDOS Attacks',
    'DeFi',
  ])
  // contains selected items

  const [selectedItems, setSelected] = useState<string[]>([])

  const toogleDropdown = () => {
    setDropdown(!dropdown)
  }
  // adds new item to multiselect
  const addTag = (item: any) => {
    setSelected(selectedItems.concat(item))
    setDropdown(false)
    setSelectedTag(selectedItems.concat(item))
    console.log(selectedTag)
  }
  // removes item from multiselect
  const removeTag = (item: any) => {
    const filtered = selectedItems.filter((e) => e !== item)
    setSelected(filtered)
    setSelectedTag(filtered)
  }

  return (
    <div className="autcomplete-wrapper">
      <div className="autcomplete">
        <div className="mx-auto flex w-full flex-col items-center">
          <div className="w-full">
            <div className="relative flex flex-col items-center">
              <div className="w-full ">
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1 ">
                  <div className="flex flex-auto flex-wrap">
                    {selectedItems.map((tag, index) => {
                      return (
                        <div
                          key={index}
                          className="m-1 flex items-center justify-center rounded-full border border-teal-300 bg-teal-100 py-1 px-2 font-medium text-teal-700 "
                        >
                          <div className="max-w-full flex-initial text-xs font-normal leading-none">{tag}</div>
                          <div className="flex flex-auto flex-row-reverse">
                            <div onClick={() => removeTag(tag)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="100%"
                                height="100%"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-x ml-2 h-4 w-4 cursor-pointer rounded-full hover:text-teal-400"
                              >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                              </svg>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                    <div className="flex-1">
                      <input
                        placeholder=""
                        className="h-full w-full appearance-none bg-transparent p-1 px-2 text-gray-800 outline-none"
                      />
                    </div>
                  </div>
                  <div
                    className="flex w-8 items-center border-l border-gray-200 py-1 pl-2 pr-1 text-gray-300"
                    onClick={toogleDropdown}
                  >
                    <button className="h-6 w-6 cursor-pointer text-gray-600 outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-up h-4 w-4"
                      >
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {dropdown ? <Dropdown list={tag} addItem={addTag}></Dropdown> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Multiselect
