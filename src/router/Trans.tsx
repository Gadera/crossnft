import { useState, useEffect } from "react";
import "../App.css";

import { networksData } from "../data/networks";
import { coinData } from "../data/coinData";

import Dropdown, { Option } from "../component/asset-bridge/Dropdown";
import icon from "../assets/layer.svg";

import state from "../store";

const Trans = () => {
  const [pay, setPay] = useState<number | undefined>(undefined);
  const [success, setSuccess] = useState<boolean>(false);

  const [selectedOptions, setSelectedOptions] = useState({
    fromPay: null as Option | null,
    payCoin: null as Option | null,
    fromReceive: null as Option | null,
    receiveCoin: null as Option | null,
  });

  useEffect(() => {
    state.payCoin = selectedOptions.payCoin;
    state.receiveCoin = selectedOptions.receiveCoin;
  }, [selectedOptions]);

  const transact = () => {
    setTimeout(() => setSuccess(true), 2000);
    console.log("transact");
  };
  const close = () => {
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="tans_container flex-col max-md:px-7">
      {!success && (
        <div className="trans_wrapper max-md:w-full space-y-6">
          <div className="trans_header_container">
            <h2 className="trans_header">Mint NFT</h2>
          </div>
          <section className="trans_form">
            <div className="trans_form_header mb-3 flex justify-between">
              <p>From</p>
              <div className="bg-[#1C1A24] rounded-lg p-1">
                <Dropdown
                  options={networksData}
                  text="Select Destination"
                  onOptionSelect={(option) =>
                    setSelectedOptions({ ...selectedOptions, fromPay: option })
                  }
                />
              </div>
            </div>
            <div className="w-full overflow-hidden text-white h-12 p-3 bg-zinc-900 rounded-lg justify-start items-center inline-flex">
              <div>{selectedOptions.fromPay?.tag}</div>
            </div>
          </section>
          <section className="trans_form">
            <div className="trans_form_header mb-3 flex justify-between">
              <p>To</p>
              <div className="bg-[#1C1A24] rounded-lg p-1">
                <Dropdown
                  options={networksData}
                  text="Select receiver"
                  onOptionSelect={(option) =>
                    setSelectedOptions({
                      ...selectedOptions,
                      fromReceive: option,
                    })
                  }
                />
              </div>
            </div>
            <div className="w-full overflow-hidden text-white h-12 p-3 bg-zinc-900 rounded-lg justify-start items-center inline-flex">
              <div>{selectedOptions.fromReceive?.address}</div>
            </div>
          </section>
          <section className="trans_form">
            {/* <div className="trans_form_header">
                  <p>From</p>
                </div> */}
            <div className="input_wrapper">
              <p className="input_wrapper_text">Tokens</p>
              <Dropdown
                options={coinData}
                text="Select token"
                onOptionSelect={(option) => {
                  setSelectedOptions({
                    ...selectedOptions,
                    payCoin: option,
                  });
                }}
              />
            </div>
          </section>
          <section className="trans_form">
            <div className="input_wrapper">
              <p className="input_wrapper_text">Amount</p>
              <input
                type="number"
                name="figure"
                placeholder="Amount"
                value={pay === undefined ? "" : pay.toString()}
                onChange={(e) =>
                  setPay(
                    e.target.value !== ""
                      ? parseFloat(e.target.value)
                      : undefined
                  )
                }
                className={`p-[6px] form_child overflow-hidden text-white w-full focus-visible:outline-none`}
                id="figure"
              />
            </div>
          </section>
          <section className="trans_form">
            <div className="input_wrapper">
              <p className="input_wrapper_text">Meta url</p>
              <input type="text" className="p-[6px] text-white form_child" />
            </div>
          </section>
          <div className="text-white text-base sm:text-xl font-bold">
            <button
              className="w-full p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex"
              onClick={transact}
            >
              Transact
            </button>
          </div>
        </div>
      )}
      {success && (
        <div className="p-6 pt-10 max-md:w-full overflow-hidden bg-zinc-800 rounded-lg">
          <div className="flex flex-col items-center space-y-4 mb-12">
            <img src={icon} alt="icon" className="w-14 h-auto" />
            <p className="text-center text-white text-lg sm:text-2xl font-semibold">
              Transaction Successful
            </p>
          </div>
          <div className="space-y-[10px] mb-[72px]">
            <div className="flex justify-between">
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                From
              </p>
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                {selectedOptions.fromPay?.tag}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                To
              </p>
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                {selectedOptions.fromReceive?.tag}
              </p>
            </div>
            <div className="flex justify-between gap-12">
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                Receiver Address
              </p>
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                {selectedOptions.fromReceive?.address}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                Fee
              </p>
              <p className="text-center text-neutral-500 text-sm sm:text-base font-normal">
                {pay} {selectedOptions.payCoin?.tag}
              </p>
            </div>
          </div>
          <div className="text-white text-base sm:text-xl font-bold">
            <button
              className="w-full p-4 bg-violet-600 rounded-lg justify-center items-center gap-2.5 inline-flex"
              onClick={close}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trans;
