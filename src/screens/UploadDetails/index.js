import React, { useState } from "react";
import cn from "classnames";
import styles from "./UploadDetails.module.sass";
import Dropdown from "../../components/Dropdown";
import Icon from "../../components/Icon";
import TextInput from "../../components/TextInput";
import Switch from "../../components/Switch";
import Loader from "../../components/Loader";
import Modal from "../../components/Modal";
import Preview from "./Preview";
import Cards from "./Cards";
import FolowSteps from "./FolowSteps";

const royaltiesOptions = ["10%", "20%", "30%"];

const items = [
  {
    title: "Create collection",
    color: "#4BC9F0",
  },
  {
    title: "Khóa 20",
    color: "#45B26B",
  },
  {
    title: "Khóa 21",
    color: "#EF466F",
  },
  {
    title: "Khóa 22",
    color: "#9757D7",
  },
  {
    title: "Khóa 23",
    color: "#9757D7",
  }
];

const Upload = () => {
  const [royalties, setRoyalties] = useState(royaltiesOptions[0]);
  const [sale, setSale] = useState(true);
  const [price, setPrice] = useState(false);
  const [locking, setLocking] = useState(false);

  const [visibleModal, setVisibleModal] = useState(false);

  const [visiblePreview, setVisiblePreview] = useState(false);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrapper}>
            <div className={styles.head}>
              <div className={cn("h2", styles.title)}>
              Create single certificate
              </div>
              <button
                className={cn("button-stroke button-small", styles.button)}
              >
                Switch to Multiple
              </button>
            </div>
            <form className={styles.form} action="">
              <div className={styles.list}>
                <div className={styles.item}>
                  <div className={styles.category}>Upload file</div>
                  <div className={styles.note}>
                  Drag or choose your file to upload
                  </div>
                  <div className={styles.file}>
                    <input className={styles.load} type="file" />
                    <div className={styles.icon}>
                      <Icon name="upload-file" size="24" />
                    </div>
                    <div className={styles.format}>
                    Only excel accepted.
                    </div>
                  </div>
                </div>
                <div className={styles.item}>
                  <div className={styles.category}>Student's information</div>
                  <div className={styles.fieldset}>
                    <TextInput
                      className={styles.field}
                      label="Student's name"
                      name="Item"
                      type="text"
                      placeholder="Insert Student's name"
                      required
                    />
                    <TextInput
                      className={styles.field}
                      label="Xếp loại rèn luyện"
                      name="Description"
                      type="text"
                      placeholder="e. g. “After purchasing you will able to recived the logo...”"
                      required
                    />
                    <div className={styles.row}>
                      <div className={styles.col}>
                        <div className={styles.field}>
                          <div className={styles.label}>Class</div>
                          <Dropdown
                            className={styles.dropdown}
                            value={royalties}
                            setValue={setRoyalties}
                            options={royaltiesOptions}
                          />
                        </div>
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Student's ID"
                          name="Size"
                          type="text"
                          placeholder="Nhập mã sinh viên"
                          required
                        />
                      </div>
                      <div className={styles.col}>
                        <TextInput
                          className={styles.field}
                          label="Student's GPA"
                          name="Propertie"
                          type="text"
                          placeholder="Nhập GPA"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.options}>
                {/* <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Put on sale</div>
                    <div className={styles.text}>
                      You’ll receive bids on this item
                    </div>
                  </div>
                  <Switch value={sale} setValue={setSale} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Instant sale price</div>
                    <div className={styles.text}>
                      Enter the price for which the item will be instantly sold
                    </div>
                  </div>
                  <Switch value={price} setValue={setPrice} />
                </div>
                <div className={styles.option}>
                  <div className={styles.box}>
                    <div className={styles.category}>Unlock once purchased</div>
                    <div className={styles.text}>
                      Content will be unlocked after successful transaction
                    </div>
                  </div>
                  <Switch value={locking} setValue={setLocking} />
                </div> */}
                <div className={styles.category}>Create collection</div>
                <div className={styles.text}>
                Choose an exiting collection or create a new one
                </div>
                <Cards className={styles.cards} items={items} />
              </div>
              <div className={styles.foot}>
                <button
                  className={cn("button-stroke tablet-show", styles.button)}
                  onClick={() => setVisiblePreview(true)}
                  type="button"
                >
                  Preview
                </button>
                <button
                  className={cn("button", styles.button)}
                  onClick={() => setVisibleModal(true)}
                  // type="button" hide after form customization
                  type="button"
                >
                  <span>Create certificate</span>
                  <Icon name="arrow-next" size="10" />
                </button>
                <div className={styles.saving}>
                  <span>Auto saving</span>
                  <Loader className={styles.loader} />
                </div>
              </div>
            </form>
          </div>
          <Preview
            className={cn(styles.preview, { [styles.active]: visiblePreview })}
            onClose={() => setVisiblePreview(false)}
          />
        </div>
      </div>
      <Modal visible={visibleModal} onClose={() => setVisibleModal(false)}>
        <FolowSteps className={styles.steps} />
      </Modal>
    </>
  );
};

export default Upload;