import React, { useEffect, useState } from "react";
import { Table } from "../Components";
import axios from "axios";
import Modal from "../Components/modal";

function Test() {
  // States
  const [data, setData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState(false);
  // Effects
  useEffect(() => {
    getCases();
  }, []);
  useEffect(() => {
    console.log(item);
  }, [item]);
  // functions
  const getCases = async () => {
    await axios
      .post("https://graduation-project-way2.vercel.app/cases/all")
      .then((res) => {
        setData(res.data.cases);
        console.log(res.data.cases);
      });
  };
  // Table Data
  const columns = [
    {
      label: "Id",
      dataIndex: "id"
    },
    {
      label: "Category label",
      dataIndex: "categoryTitle"
    },
    {
      label: "Thumbnail",
      type: "children",
      children: ({ header, row }) => {
        return <img src={row?.thumbnail} alt="" />;
      }
    },
    {
      type: "actions",
      label: "Add Case",
      actions: [
        {
          label: "add case",
          action: ({ item }) => {
            setShowModal(true);
            setItem(item);
          }
        }
      ]
    }
  ];

  return (
    <>
      <Table headers={columns} body={data} />{" "}
      <Modal open={showModal} toggle={setShowModal} headerTitle={item?.title} />
    </>
  );
}

export default Test;
