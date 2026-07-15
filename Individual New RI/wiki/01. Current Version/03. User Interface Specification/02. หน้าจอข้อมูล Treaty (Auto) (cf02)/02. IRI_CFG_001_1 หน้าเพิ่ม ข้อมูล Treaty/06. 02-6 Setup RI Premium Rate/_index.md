# 02-6 Setup RI Premium Rate

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/02-6+Setup+RI+Premium+Rate  
> **Page ID:** 1100350187  
> **Path:** Home / Current Version / 03. User Interface Specification / 02. หน้าจอข้อมูล Treaty (Auto) (cf02) / 02. IRI_CFG_001_1 หน้าเพิ่ม ข้อมูล Treaty / 02-6 Setup RI Premium Rate

---

### สิทธิ์การเข้า

- [เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)](https://docs.google.com/spreadsheets/d/17bqeu7FPj5gvU25OJsIW8LxZau3TS5wf2E7bTMm-q6k/edit#gid=423528764)

### Assumption

- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ การบันทึก/แก้ไข รายการ Treaty

### Screen Overview

- เพื่อ การบันทึก/แก้ไข รายการ Treaty

### Pre-Condition

1. ผู้ใช้งานต้องมีสิทธิ์การใช้งานของ Maker และมองเห็นปุ่มเพิ่ม Treaty หรือ Icon ![](https://lh6.googleusercontent.com/BKj8Ka58SefZjOKt3r_HqO1f33z3PjmvkT3LEf7NDjanNjOv35TKS-tPWhTw2-e79IWV8FQMehI5KaCGDY0wh-rB9OwAsURgsLxzr1qKPqFWSw_45Y75GX1jq_usfc2NYsSr2ZQ1xeEeR_HRLUpqxAc) ในหน้า [IRI_CFG_001 หน้ารวม + ค้นหา Treaty (cf02)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1098613387)
2. ผู้ใช้งานต้องกรอกข้อมูลในหน้า [02-5 Setup RI Commission Rate](http://wiki.thaisamut.co.th/x/3QKWQQ) เรียบร้อยแล้วจึงจะแสดงหน้าจอนี้

- Setup RI Premium Rate

![](https://lh3.googleusercontent.com/oO9fzZLoOGv-c99u7YrlkhKG1UJ9zIf9MVnZU8LOEyCpJ1-_BgNCp6n7dJoSgMe14lk_HNA3tkaDbpaTk1FcGlvao-ugAwjjVWzDz2D7aF8GYco5h_YQIVJv6NqDf9mCOpLZQU1nKIiXHn-A1kAEfJ4)

**Description**

| No. | หัวข้อ | รายละเอียด |  |
| --- | --- | --- | --- |
| **1** | **วัตถุประสงค์ (Objective)** | แสดงข้อมูลรายการ Setup RI Premium Rate ทั้งหมดเพิ่ม / ลบ / แก้ไข Setup RI Premium Rate |  |
| **2** | **ผู้ใช้งาน และ สิทธิ์ที่ได้รับ (Target Users and authorization)** | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ |  |
| **3** | **ข้อมูลที่ป้อนเข้าสู่ระบบ** | **ข้อมูล Setup RI Premium Rate ของ Treaty**ประเภทของ RI Premium Rate ของ Treaty นี้ |  |
| **4** | **ข้อมูลที่ได้จากระบบ (Output)** | **ข้อมูล Setup RI Premium Rate ของ Treaty**ประเภทของ Setup RI Premium Rate ของ Treaty นี้ |  |
| **5** | **การกระทำกับหน้าจอ (Actions)** | กดเลือก ประเภทของ Setup RI Premium Rate แสดงตัวเลือกในรูปแบบ Dropdown |  |
| **6** | **อธิบายรายละเอียด (Description)** | **Field****Type****แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล****Default****เลือกประเภท RI Premium Rate**Dropdown Listบังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown Listกรุณาเลือก | **Table สำหรับดึงข้อมูลตัวเลือกมาแสดง**Screen FieldDB TableDB Field ที่แสดงDB Field ที่นำไปบันทึกเงื่อนไข**เลือกประเภท RI Premium Rate**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ)descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000600 **บันทึกจาก Table แสดงตัวเลือกมา****ลงฐานข้อมูล**Screen FieldDB TableDB Field**เลือกประเภท RI Premium Rate**[tx_tmp_premium_rate](http://wiki.thaisamut.co.th/x/CYPGQQ)ms_prem_rate |
| **Field** | **Type** | **แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล** | **Default** |
| **เลือกประเภท RI Premium Rate** | Dropdown List | บังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List | กรุณาเลือก |
| Screen Field | DB Table | DB Field ที่แสดง | DB Field ที่นำไปบันทึก | เงื่อนไข |
| **เลือกประเภท RI Premium Rate** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000600 |
| Screen Field | DB Table | DB Field |
| **เลือกประเภท RI Premium Rate** | [tx_tmp_premium_rate](http://wiki.thaisamut.co.th/x/CYPGQQ) | ms_prem_rate |

**กรณีเลือก ประเภท**

1. [Set up By Treaty](http://wiki.thaisamut.co.th/x/7QKWQQ)[](http://wiki.thaisamut.co.th/x/4wKWQQ)
2. [Set up By Product](http://wiki.thaisamut.co.th/x/7wKWQQ)
3. [Set up By แผนกรมธรรม์](http://wiki.thaisamut.co.th/x/AwOWQQ)
4. [Set up By Package](http://wiki.thaisamut.co.th/x/BwOWQQ)
5. [Set up By กลุ่มโรค](http://wiki.thaisamut.co.th/x/KQOWQQ)
