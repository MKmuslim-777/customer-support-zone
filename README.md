এসাইনমেন্টের প্রশ্নের উত্তর সমূহ 
 ---- 
১. JSX হলো react এর একটি file extention এখানে মুলত html type code লিখা হয় UI তে দেখানোর জন্য। এখানে পিউর Javascript লিখা যায়। function call এর মাধ্যমে UI তে দেখানো হয় Component গুলো।

----
২. A. Props: i. props মুলত parents component থেকে child components এ পাঠানো হয়। 
            ii. এটি শুধুমাত্র read করা যায়। 
            iii. Props মুলত components customize করার জন্য ব্যবহৃত হয়।

    B. useState: i.  হলো Component এর ভিতরের Data, যা Component সে নিজেই manage করে। 
                ii. State is mutable. অর্থাৎ, component এর behavior কেমন হবে তা নির্ধারণ করে। 
                iii. State পরিবর্তন হলে component আবার render হয়।

---------------

৩. useState হলো মুলত একটি Hook, যেটি function component এ state ব্যবহারে সাহায্য করে। 
    
    useState Hook যেভাবে কাজ করেঃ এখানে মলত ৩টি ধাপ থাকে। (state, setState & useState())
    setState দিয়ে state এর value initial করা হয়। 
    useState() দিয়ে চাইলে default value দিয়ে রাখা যায়। 
    and Hook এর মান থাকে মুলত state এ। 

----------- 

৪. Component এ যদি আমাদের state পাঠাতে হয় তাহলে আমরা props হিসেবে যেকোনো component এ পাঠাতে পারি। 
    যেমনঃ <childComponent state={state} setState={setState}> </childComponent>

-----------------

৫. In the react event handling is too easy. 
    Html এর মতো করেই আমরা onclike use করে event function call করতে পারি। 
    কিন্তু React এ একটু বিভিন্ন। যেমনঃ 
        html => onclike={eventHandle}
        React => onClike={eventHandle}

    তবে যদি আমি কোনো arrguments পাঠাতে চাই তাহলে একটু ভিন্ন ভাবে পাঠাতে হয়। 
    যেমনঃ 
        html => onclike={eventHandle("Hello Mk")}
        React => onClike={() => eventHandle("Hello Mk")}

    এখানে eventHandle কে মনে মনে একটি function ধরা হয়েছে। 
    React এ eventHandle function এ কোনো arrgument পাঠাতে আমাদের arrow function use করতে হয়।  