# 02-5 Setup RI Commission Rate

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/02-5+Setup+RI+Commission+Rate  
> **Page ID:** 1100350173  
> **Path:** Home / Current Version / 03. User Interface Specification / 02. หน้าจอข้อมูล Treaty (Auto) (cf02) / 02. IRI_CFG_001_1 หน้าเพิ่ม ข้อมูล Treaty / 02-5 Setup RI Commission Rate

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
2. ผู้ใช้งานต้องกรอกข้อมูลในหน้า [02-4 Setup Retention](http://wiki.thaisamut.co.th/x/swKWQQ) เรียบร้อยแล้วจึงจะแสดงหน้าจอนี้

- Setup RI Commission Rate

![](https://lh6.googleusercontent.com/p6bccs_d_8ztTO2q_f612O5F6hyDU5v1QFvUurmM2FFO16KD7CDZ64VoOvfOZ9tZJX3sBUn9HrmCu7cEdh3lwI4W29105pIpop43Lo3G7C1lZoxxvfqPoBUgG-ZVt-GPKLmYMhde9emxBamgKI3R7xY)

**Description**

| No. | หัวข้อ | รายละเอียด | Database |
| --- | --- | --- | --- |
| **1** | **วัตถุประสงค์ (Objective)** | แสดงข้อมูลรายการ Setup RI Commission Rate ทั้งหมดเพิ่ม / ลบ / แก้ไข Setup RI Commission Rate |  |
| **2** | **ผู้ใช้งาน และ สิทธิ์ที่ได้รับ (Target Users and authorization)** | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ |  |
| **3** | **ข้อมูลที่ป้อนเข้าสู่ระบบ** | ข้อมูล Setup RI Commission Rate ของ Treatyประเภทของ Setup RI Commission Rate ของ Treaty นี้ |  |
| **4** | **ข้อมูลที่ได้จากระบบ (Output)** | ข้อมูล Setup RI Commission Rate ของ Treatyประเภทของ Setup RI Commission Rate ของ Treaty นี้ |  |
| **5** | **การกระทำกับหน้าจอ (Actions)** | กดเลือก ประเภทของ Setup RI Commission Rate แสดงตัวเลือกในรูปแบบ Dropdown |  |
| **6** | **อธิบายรายละเอียด (Description)** | **Field****Type****แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล****Default****เลือกประเภท RI Commission Rate**Dropdown Listบังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown Listกรุณาเลือก | **Table สำหรับดึงข้อมูลตัวเลือกมาแสดง**Screen FieldDB TableDB Field ที่แสดงDB Field ที่นำไปบันทึกเงื่อนไข**เลือกประเภท RI Commission Rate**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ)descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000500 **บันทึกจาก Table แสดงตัวเลือกมา****ลงฐานข้อมูล**Screen FieldDB TableDB Field**เลือกประเภท RI Commission Rate**[tx_tmp_commission_rate](http://wiki.thaisamut.co.th/x/6wCaQQ)ms_comm_type |
| **Field** | **Type** | **แสดงข้อมูลและเงื่อนไขการตรวจสอบข้อมูล** | **Default** |
| **เลือกประเภท RI Commission Rate** | Dropdown List | บังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List | กรุณาเลือก |
| Screen Field | DB Table | DB Field ที่แสดง | DB Field ที่นำไปบันทึก | เงื่อนไข |
| **เลือกประเภท RI Commission Rate** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000500 |
| Screen Field | DB Table | DB Field |
| **เลือกประเภท RI Commission Rate** | [tx_tmp_commission_rate](http://wiki.thaisamut.co.th/x/6wCaQQ) | ms_comm_type |

**กรณีเลือก ประเภท**

1. [Policy Year](http://wiki.thaisamut.co.th/x/4wKWQQ)
2. [Policy Term](http://wiki.thaisamut.co.th/x/5gKWQQ)
3. ไม่กำหนด ให้สามารถบันทึกหน้าจอและระบบพาไปยังหน้า [02-6 Setup RI Premium Rate](http://wiki.thaisamut.co.th/x/6wKWQQ)
