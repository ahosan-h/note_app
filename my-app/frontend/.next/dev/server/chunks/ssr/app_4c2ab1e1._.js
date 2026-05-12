module.exports = [
"[project]/app/actions/bcpost.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bcgetpost",
    ()=>Bcgetpost,
    "default",
    ()=>Bccrtpost
]);
const backend_url = "http://localhost:3001";
async function Bccrtpost(formData) {
    try {
        const senddata = await fetch(`${backend_url}/create-post`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await senddata.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error
        };
    }
}
async function Bcgetpost(username) {
    const url = `${backend_url}/get-post?username=${username}`;
    try {
        const getpost = await fetch(url);
        const data = await getpost.json();
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            error
        };
    }
}
}),
"[project]/app/adduser/components/postcrt.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Posthandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
//import Getuserandpost ,{Crpost} from "@/app/actions/post";
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcpost.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
// i havent note this yet
"use client";
;
;
;
function Posthandler() {
    //const[postusername,setPostusername]=useState("")
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [postlist, setPostlsit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchpostusername, setSeaerchpostusername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    //const[name,setName]=useState("")
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createpostname, setCreatepostname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const crtpost = async (e)=>{
        e.preventDefault();
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])({
            title,
            content,
            name: createpostname
        });
        if (res.success) {
            alert("post created");
        } else {
            alert("failed to create post");
        }
    };
    const getpost = async ()=>{
        if (!searchpostusername) {
            alert("user name missing or not found");
        }
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Bcgetpost"])(searchpostusername);
            if (!searchpostusername) {
                alert(" pleasue enter a username");
            }
            if (res.success) {
                setPostlsit(res.data || []);
            } else {
                alert("failed to post");
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: crtpost,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        placeholder: "enetr your title"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        placeholder: "enter your content here"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: createpostname,
                        onChange: (e)=>setCreatepostname(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 76,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn bg-orange-400 text-white",
                        type: "submit",
                        children: "Post"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 62,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: searchpostusername,
                placeholder: "enter username",
                onChange: (e)=>setSeaerchpostusername(e.target.value)
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 84,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-secondary btn-soft",
                onClick: getpost,
                children: "Getpost"
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 88,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex felx-col gap-2 px-2 py-4",
                children: postlist.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            ele.title,
                            " ",
                            ele.content
                        ]
                    }, ele._id, true, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 89,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/adduser/components/postcrt.tsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_4c2ab1e1._.js.map