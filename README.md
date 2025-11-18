## 1. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

### টাইপস্ক্রিপ্ট এনামস (Enums):

টাইপস্ক্রিপ্ট-এ একটি **`enum` (সংখ্যার তালিকা)** আপনাকে নামযুক্ত ধ্রুবকগুলির একটি সেট সংজ্ঞায়িত করার সুযোগ দেয়। এর মূল ব্যবহার হল "জাদুকরী সংখ্যা" (magic numbers) বা হার্ডকোডেড স্ট্রিংগুলিকে অর্থবহ নাম দিয়ে প্রতিস্থাপন করে কোডকে আরও **সহজবোধ্য** এবং **নিরাপদ** করে তোলা।

### প্রধান সুবিধা

এনামগুলি ধ্রুবকগুলিকে একটি **বর্ণনামূলক নাম** দেয়, সম্পর্কিত মানগুলিকে কেন্দ্রীভূত করে এবং অবৈধ অ্যাসাইনমেন্ট রোধ করতে টাইপস্ক্রিপ্ট-এর টাইপ-চেকিংকে সক্ষম করে।

### উদাহরণ

### ১. সংখ্যাসূচক এনাম (Numeric Enum)

সংখ্যাসূচক এনামগুলি স্বয়ংক্রিয়ভাবে মান হিসেবে সংখ্যা বরাদ্দ করে, যা `0` থেকে শুরু হয়।

```typescript
enum StatusCodes {
    Success,   // 0
    Failure,   // 1
    Pending    // 2
}

let code: StatusCodes = StatusCodes.Success; 
// code holds the value 0
```
---
### ২. স্ট্রিং এনাম (String Enum)

স্ট্রিং এনামগুলি ডিবাগিং-এর জন্য আরও ভালো পাঠযোগ্যতা প্রদান করে, কারণ এগুলিতে আসল মানের নাম থাকে। প্রতিটি সদস্যকে অবশ্যই স্পষ্টভাবে স্ট্রিং দিয়ে ইনিশিয়ালাইজ **করতে হবে**।

```typescript
enum FileType {
    PDF = "pdf",
    JPEG = "jpeg",
    PNG = "png",
}

let docType: FileType = FileType.JPEG;
// docType holds the value "jpeg"
```

---
---
---
---
---

## 2. Provide an example of using union and intersection types in TypeScript.


### ইউনিয়ন টাইপ ($\vert$) - "অথবা (OR)"

```typescript
type Status = "Pending" | "Success" | "Error";

// একটি 'statusMessage' তিনটি স্ট্রিং লিটারেলের যেকোনো একটি হতে পারে
let currentStatus: Status = "Success"; 
// let currentStatus: Status = "Processing"; // এটি ভুল দেখাবে
```
---
### ইন্টারসেকশন টাইপ ($\cap$) - "এবং (AND)"

```typescript
type HasID = { id: number };
type HasName = { name: string };

// 'Identifiable' টাইপের অবশ্যই 'id' এবং 'name' *দুটোই* থাকতে হবে
type Identifiable = HasID & HasName; 

const user: Identifiable = { 
  id: 101, 
  name: "Alex", 
  // 'id' বা 'name' না থাকলে ভুল দেখাবে
};
```
---
