(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/actions/bcpost.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
_c = Bccrtpost;
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
_c1 = Bcgetpost;
var _c, _c1;
__turbopack_context__.k.register(_c, "Bccrtpost");
__turbopack_context__.k.register(_c1, "Bcgetpost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/adduser/components/postcrt.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Posthandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
//import Getuserandpost ,{Crpost} from "@/app/actions/post";
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcpost.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// i havent note this yet
"use client";
;
;
function Posthandler() {
    _s();
    //const[postusername,setPostusername]=useState("")
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [content, setContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [postlist, setPostlsit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchpostusername, setSeaerchpostusername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //const[name,setName]=useState("")
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [createpostname, setCreatepostname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const crtpost = async (e)=>{
        e.preventDefault();
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            title,
            content,
            name: createpostname
        });
        if (res.success) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "alert alert-success alert-soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: " post created"
                }, void 0, false, {
                    fileName: "[project]/app/adduser/components/postcrt.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 30,
                columnNumber: 17
            }, this);
        } else {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "alert alert-error alert-soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: " post creation failed "
                }, void 0, false, {
                    fileName: "[project]/app/adduser/components/postcrt.tsx",
                    lineNumber: 37,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 36,
                columnNumber: 17
            }, this);
        }
    };
    const getpost = async ()=>{
        if (!searchpostusername) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "alert",
                className: "alert alert-error alert-soft",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: " username not found"
                }, void 0, false, {
                    fileName: "[project]/app/adduser/components/postcrt.tsx",
                    lineNumber: 48,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this);
        }
        setLoading(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bcgetpost"])(searchpostusername);
            if (!searchpostusername) {
                alert(" pleasue enter a username");
            }
            if (res.success) {
                setPostlsit(res.data || []);
            } else {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "alert",
                    className: "alert alert-warning alert-soft",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: " user postlsit not found "
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/adduser/components/postcrt.tsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this);
            }
        } catch (error) {
            console.error(error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: crtpost,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        placeholder: "enetr your title"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: content,
                        onChange: (e)=>setContent(e.target.value),
                        placeholder: "enter your content here"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: createpostname,
                        onChange: (e)=>setCreatepostname(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn bg-orange-400 text-white",
                        type: "submit",
                        children: "Post"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 78,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: searchpostusername,
                placeholder: "enter username",
                onChange: (e)=>setSeaerchpostusername(e.target.value)
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 100,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-secondary btn-soft",
                onClick: getpost,
                children: "Getpost"
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 104,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex felx-col gap-2 px-2 py-4",
                children: postlist.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            ele.title,
                            " ",
                            ele.content
                        ]
                    }, ele._id, true, {
                        fileName: "[project]/app/adduser/components/postcrt.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/postcrt.tsx",
                lineNumber: 105,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/adduser/components/postcrt.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
_s(Posthandler, "QHeMTB4VNPFEI2LrmXVfexCX7eo=");
_c = Posthandler;
var _c;
__turbopack_context__.k.register(_c, "Posthandler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:505e65 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"405c790056af3057cbfd01eae7daa438dd9b217adc":"default"},"app/actions/bcuser.ts",""] */ "use turbopack no side effects";
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405c790056af3057cbfd01eae7daa438dd9b217adc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "default");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmN1c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5cclxuY29uc3QgYmFja2VuZF91cmw9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSdcclxuXHJcbi8vY3JlYXRldXNlciBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBCY2hhbmRsZXN1Ym1pdChmb3JtRGF0YTpzdHJpbmcpe1xyXG4gICAgdHJ5e1xyXG5cclxuY29uc3QgIHJlc3BvbnNlPWF3YWl0IGZldGNoKGAke2JhY2tlbmRfdXJsfS9jcmVhdGUtdXNlcmAse1xyXG4gICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG59KVxyXG5cclxuY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcclxucmV0dXJue3N1Y2Nlc3M6dHJ1ZSxkYXRhfVxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIHJldHVybntzdWNjZXNzOmZhbHNlLGVycm9yfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9nZXQgdXNlciBmdWNuaXRvbiBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEJjZ2V0dXNlcigpe1xyXG50cnl7XHJcbmNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKGAke2JhY2tlbmRfdXJsfS9nZXQtdXNlcmApXHJcbmNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG5yZXR1cm4ge3N1Y2Nlc3M6IHRydWUsZGF0YX1cclxufWNhdGNoKGVycm9yKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybntzdWNjZXNzOmZhbHNlLGVycm9yfVxyXG5cclxufVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjBSQU04QiJ9
}),
"[project]/app/actions/data:747a7e [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bcgetuser",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0000e2799b89c35da33599e02fdaac3dd2323207d3":"Bcgetuser"},"app/actions/bcuser.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0000e2799b89c35da33599e02fdaac3dd2323207d3", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "Bcgetuser");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYmN1c2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiXHJcblxyXG5cclxuY29uc3QgYmFja2VuZF91cmw9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMSdcclxuXHJcbi8vY3JlYXRldXNlciBmdW5jdGlvblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBCY2hhbmRsZXN1Ym1pdChmb3JtRGF0YTpzdHJpbmcpe1xyXG4gICAgdHJ5e1xyXG5cclxuY29uc3QgIHJlc3BvbnNlPWF3YWl0IGZldGNoKGAke2JhY2tlbmRfdXJsfS9jcmVhdGUtdXNlcmAse1xyXG4gICAgbWV0aG9kOlwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczp7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0sXHJcbiAgICBib2R5OkpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKVxyXG59KVxyXG5cclxuY29uc3QgZGF0YT1hd2FpdCByZXNwb25zZS5qc29uKClcclxucmV0dXJue3N1Y2Nlc3M6dHJ1ZSxkYXRhfVxyXG5cclxuICAgIH1jYXRjaChlcnJvcil7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgIHJldHVybntzdWNjZXNzOmZhbHNlLGVycm9yfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuLy9nZXQgdXNlciBmdWNuaXRvbiBcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEJjZ2V0dXNlcigpe1xyXG50cnl7XHJcbmNvbnN0IHJlc3BvbnNlPWF3YWl0IGZldGNoKGAke2JhY2tlbmRfdXJsfS9nZXQtdXNlcmApXHJcbmNvbnN0IGRhdGE9YXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG5yZXR1cm4ge3N1Y2Nlc3M6IHRydWUsZGF0YX1cclxufWNhdGNoKGVycm9yKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgIHJldHVybntzdWNjZXNzOmZhbHNlLGVycm9yfVxyXG5cclxufVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Im1SQTBCc0Isc0xBQUEifQ==
}),
"[project]/app/adduser/components/userreg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Userreg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
//import handlesubmit,{Getuser} from "@/app/actions/server"
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$505e65__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:505e65 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$747a7e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:747a7e [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// i havent note this yet
"use client";
;
;
function Userreg() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userlist, setUserlist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const sub = async (e)=>{
        e.preventDefault();
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$505e65__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["default"])({
            name,
            userId
        });
        if (res.success) {
            alert("user created");
        } else {
            alert("failed to create user");
        }
    };
    const gt = async ()=>{
        const ft = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$747a7e__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["Bcgetuser"])();
        if (ft.success) {
            setUserlist(ft.data);
        } else {
            alert("user list not found");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col jsutify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: sub,
                className: "felx flex-col px-2 py-4 gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "enter your name",
                        value: name,
                        onChange: (e)=>setName(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/userreg.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "enter your userId",
                        value: userId,
                        onChange: (e)=>setUserId(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/userreg.tsx",
                        lineNumber: 50,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-secondary",
                        type: "submit",
                        children: "Submit"
                    }, void 0, false, {
                        fileName: "[project]/app/adduser/components/userreg.tsx",
                        lineNumber: 55,
                        columnNumber: 1
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/adduser/components/userreg.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "btn btn-ghost",
                onClick: gt,
                children: "Get alluser"
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/userreg.tsx",
                lineNumber: 60,
                columnNumber: 1
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex felx-col",
                children: userlist.map((ele)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: ele.name
                    }, ele._id, false, {
                        fileName: "[project]/app/adduser/components/userreg.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/adduser/components/userreg.tsx",
                lineNumber: 64,
                columnNumber: 1
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/adduser/components/userreg.tsx",
        lineNumber: 41,
        columnNumber: 1
    }, this);
}
_s(Userreg, "+dV3jh7UoPXaiO5dPgCaFOe+9zU=");
_c = Userreg;
var _c;
__turbopack_context__.k.register(_c, "Userreg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_f7e84e87._.js.map