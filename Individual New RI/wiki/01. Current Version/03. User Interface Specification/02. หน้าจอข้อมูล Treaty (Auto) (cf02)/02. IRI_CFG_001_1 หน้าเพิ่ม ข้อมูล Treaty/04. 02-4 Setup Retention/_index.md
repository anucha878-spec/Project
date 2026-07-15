# 02-4 Setup Retention

> **Source:** http://wiki.thaisamut.co.th/display/RDSINRI/02-4+Setup+Retention  
> **Page ID:** 1100350131  
> **Path:** Home / Current Version / 03. User Interface Specification / 02. หน้าจอข้อมูล Treaty (Auto) (cf02) / 02. IRI_CFG_001_1 หน้าเพิ่ม ข้อมูล Treaty / 02-4 Setup Retention

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
2. ผู้ใช้งานต้องกรอกข้อมูลในหน้า [02-3 Setup Rider Code](http://wiki.thaisamut.co.th/x/rwKWQQ) เรียบร้อยแล้วจึงจะแสดงหน้าจอนี้

- Setup Retention

![](https://lh6.googleusercontent.com/ZCRiu8jIhALF9xi8kJdxoNqZSR-LrY-qfWqoE_IPiHNwJmvGDIIv3OqvlxFVUpoUWVaGNALpnzQ7kf5U0yNOR18f5VWx5_h-8lr5qGu9TgAS1g0ZS5HTj4JKq8p61m5Pba0OeHZZq7p89ucEDffrtoU)

**Description**

****

| No. | หัวข้อ | รายละเอียด | Database |
| --- | --- | --- | --- |
| **1** | **วัตถุประสงค์ (Objective)** | แสดงข้อมูลรายการ Setup Retention ทั้งหมดเพิ่ม / ลบ / แก้ไข Setup Retention |  |
| **2** | **ผู้ใช้งาน และ สิทธิ์ที่ได้รับ (Target Users and authorization)** | เจ้าหน้าที่ฝ่ายคณิตศาสตร์ |  |
| **3** | **ข้อมูลที่ป้อนเข้าสู่ระบบ** | **ข้อมูล Setup Retention ของ Treaty**เคสตรวจสุขภาพที่จะเข้าเงื่อนไขของ Treaty นี้ประเภทหลักของ Retention ของ Treaty นี้ประเภทรองของ Retention ของ Treaty นี้ |  |
| **4** | **ข้อมูลที่ได้จากระบบ (Output)** | **ข้อมูล Setup Retention ของ Treaty**เคสตรวจสุขภาพที่จะเข้าเงื่อนไขของ Treaty นี้ประเภทหลักของ Retention ของ Treaty นี้ประเภทรองของ Retention ของ Treaty นี้ |  |
| **5** | **การกระทำกับหน้าจอ (Actions)** | กดเลือก เคสสุขภาพ แสดงตัวเลือกในรูปแบบ Dropdownกดเลือก รูปแบบ Retention หลัก แสดงตัวเลือกในรูปแบบ Dropdownกดเลือก รูปแบบ Retention รอง แสดงตัวเลือกในรูปแบบ Dropdown |  |
| **6** | **อธิบายรายละเอียด (Description)** | **Field****Type****Basic validation/ Action****Default****เคสตรวจสุขภาพ**Dropdown Listบังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List กรุณาเลือก**เลือกประเภท Treaty (รูปแบบ Retention หลัก)**Dropdown Listบังคับกรอกแสดงตัวเลือกในรูปแบบ Dropdown Listกรุณาเลือก**เลือกประเภท Treaty (รูปแบบ Retention รอง)**Dropdown Listบังคับกรอกแสดงตัวเลือกในรูปแบบ Dropdown Listกรุณาเลือก | **Table สำหรับดึงข้อมูลตัวเลือกมาแสดง** Screen FieldDB TableDB Field ที่แสดงDB Field ที่นำไปบันทึกเงื่อนไข**เคสตรวจสุขภาพ**[ms_medical_type](http://wiki.thaisamut.co.th/x/BIDKQQ)medical_type_thms_medical_type **เลือกประเภท Treaty (รูปแบบ Retention หลัก)**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ)descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000200**เลือกประเภท Treaty (รูปแบบ Retention รอง)**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000300โดยแสดงรายการ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).parent_id **บันทึกจาก Table แสดงตัวเลือกมา****ลงฐานข้อมูล**Screen FieldDB TableDB Field**เคสตรวจสุขภาพ**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_medical_type**เลือกประเภท Treaty (รูปแบบ Retention หลัก)**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_retention_type**เลือกประเภท Treaty (รูปแบบ Retention รอง)**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_retention_option |
| **Field** | **Type** | **Basic validation/ Action** | **Default** |
| **เคสตรวจสุขภาพ** | Dropdown List | บังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List | กรุณาเลือก |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | Dropdown List | บังคับกรอกแสดงตัวเลือกในรูปแบบ Dropdown List | กรุณาเลือก |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | Dropdown List | บังคับกรอกแสดงตัวเลือกในรูปแบบ Dropdown List | กรุณาเลือก |
| Screen Field | DB Table | DB Field ที่แสดง | DB Field ที่นำไปบันทึก | เงื่อนไข |
| **เคสตรวจสุขภาพ** | [ms_medical_type](http://wiki.thaisamut.co.th/x/BIDKQQ) | medical_type_th | ms_medical_type |  |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000200 |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000300โดยแสดงรายการ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).parent_id |
| Screen Field | DB Table | DB Field |
| **เคสตรวจสุขภาพ** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_medical_type |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_retention_type |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_retention_option |

**กรณีเลือก ประเภท**

1. [Surplus > Standard / Substandard](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1100350135)
2. [Surplus > Amount](http://wiki.thaisamut.co.th/x/ugKWQQ)
3. [](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1100350135)[Surplus > Age Period](http://wiki.thaisamut.co.th/x/vAKWQQ)
4. [Surplus > Insurance Policies](http://wiki.thaisamut.co.th/x/0AKWQQ)
5. [Quota share > Quota share Percentage](http://wiki.thaisamut.co.th/x/1AKWQQ)
6. [Surplus-QS > Percentage (Layer)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1100350169)
7. [QS-Surplus > Percentage (Layer)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1100350169)
