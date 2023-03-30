import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import useQuery from "./useQuery";
// useState, useEffect, useContext, useReducer, useMemo, useCallback

function App() {
    const { data, refetch } = useQuery("https://reqres.in/api/users?page=2");

    refetch();

    return <div>{data && data.map((el) => <div>{el.email}</div>)}</div>;
}

export default App;
