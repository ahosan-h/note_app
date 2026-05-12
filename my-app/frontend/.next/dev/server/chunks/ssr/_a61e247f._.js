module.exports = [
"[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0000e2799b89c35da33599e02fdaac3dd2323207d3":"Bcgetuser","405c790056af3057cbfd01eae7daa438dd9b217adc":"default"},"",""] */ __turbopack_context__.s([
    "Bcgetuser",
    ()=>Bcgetuser,
    "default",
    ()=>Bchandlesubmit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const backend_url = "http://localhost:3001";
async function Bchandlesubmit(formData) {
    try {
        const response = await fetch(`${backend_url}/create-user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        // revalidatePath("/adduser");
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
async function Bcgetuser() {
    try {
        //we are simulating delay if we see spinner then suspense and streaming is working fine
        await new Promise((res)=>setTimeout(res, 3000));
        const response = await fetch(`${backend_url}/get-user`, {
            next: {
                revalidate: 60
            }
        });
        const data = await response.json();
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    Bchandlesubmit,
    Bcgetuser
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(Bchandlesubmit, "405c790056af3057cbfd01eae7daa438dd9b217adc", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(Bcgetuser, "0000e2799b89c35da33599e02fdaac3dd2323207d3", null);
}),
"[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4013138a0164a5f6614fc48def2520755d50b09779":"default","407b408af8173f38ae59e63e64713026d2018aa188":"Bcgetpost"},"",""] */ __turbopack_context__.s([
    "Bcgetpost",
    ()=>Bcgetpost,
    "default",
    ()=>Bccrtpost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
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
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    Bccrtpost,
    Bcgetpost
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(Bccrtpost, "4013138a0164a5f6614fc48def2520755d50b09779", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(Bcgetpost, "407b408af8173f38ae59e63e64713026d2018aa188", null);
}),
"[project]/.next-internal/server/app/adduser/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcuser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/.next-internal/server/app/adduser/page/actions.js { ACTIONS_MODULE0 => \"[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0000e2799b89c35da33599e02fdaac3dd2323207d3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcuser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Bcgetuser"],
    "4013138a0164a5f6614fc48def2520755d50b09779",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "405c790056af3057cbfd01eae7daa438dd9b217adc",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcuser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "407b408af8173f38ae59e63e64713026d2018aa188",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Bcgetpost"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$adduser$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$bcuser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/adduser/page/actions.js { ACTIONS_MODULE0 => "[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcuser$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcuser.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$bcpost$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/actions/bcpost.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_a61e247f._.js.map