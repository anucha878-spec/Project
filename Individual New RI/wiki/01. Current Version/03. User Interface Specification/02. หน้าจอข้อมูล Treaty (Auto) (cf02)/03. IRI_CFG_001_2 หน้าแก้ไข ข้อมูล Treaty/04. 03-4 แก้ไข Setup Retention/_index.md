# 03-4 แก้ไข Setup Retention

> **Source:** http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1107427782  
> **Page ID:** 1107427782  
> **Path:** Home / Current Version / 03. User Interface Specification / 02. หน้าจอข้อมูล Treaty (Auto) (cf02) / 03. IRI_CFG_001_2 หน้าแก้ไข ข้อมูล Treaty / 03-4 แก้ไข Setup Retention

---

### สิทธิ์การเข้า

- [เจ้าหน้าที่ฝ่ายคณิตศาสตร์ (Maker)](https://docs.google.com/spreadsheets/d/17bqeu7FPj5gvU25OJsIW8LxZau3TS5wf2E7bTMm-q6k/edit#gid=423528764)

### Assumption

- ผู้ใช้งานต้อง Log in เข้าใช้งานอย่างถูกต้อง
- ผู้ใช้งานต้องมีสิทธิ์การเข้าถึงหน้าจอ การบันทึก/แก้ไข รายการ Treaty

### Screen Overview

- เพื่อ การบันทึก/แก้ไข รายการ Treaty

### Pre-Condition

1. ผู้ใช้งานต้องมีสิทธิ์การใช้งานของ Maker และมองเห็น Icon ![](https://lh6.googleusercontent.com/BKj8Ka58SefZjOKt3r_HqO1f33z3PjmvkT3LEf7NDjanNjOv35TKS-tPWhTw2-e79IWV8FQMehI5KaCGDY0wh-rB9OwAsURgsLxzr1qKPqFWSw_45Y75GX1jq_usfc2NYsSr2ZQ1xeEeR_HRLUpqxAc) ในหน้า [IRI_CFG_001 หน้ารวม + ค้นหา Treaty (cf02)](http://wiki.thaisamut.co.th/pages/viewpage.action?pageId=1098613387)
2. ผู้ใช้งานกด Icon ![](https://lh6.googleusercontent.com/BKj8Ka58SefZjOKt3r_HqO1f33z3PjmvkT3LEf7NDjanNjOv35TKS-tPWhTw2-e79IWV8FQMehI5KaCGDY0wh-rB9OwAsURgsLxzr1qKPqFWSw_45Y75GX1jq_usfc2NYsSr2ZQ1xeEeR_HRLUpqxAc) ระบบจึงจะแสดงหน้าจอนี้

![](/download/attachments/1107427669/image2023-11-9%209%3A27%3A12.png?version=1&modificationDate=1699496832979&api=v2)

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
| **6** | **อธิบายรายละเอียด (Description)** | การแสดงข้อมูลแบ่งออกเป็น 2 กรณี**กรณีที่ 1** : ยังไม่เคยได้รับการอนุมัติใช้งาน [tx_tmp_treaty](http://wiki.thaisamut.co.th/x/twCaQQ).treaty_code ยังไม่มีข้อมูลอยู่ใน [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).treaty_code**กรณีที่ 2** : เคยได้รับการอนุมัติใช้งานแล้ว [tx_tmp_treaty](http://wiki.thaisamut.co.th/x/twCaQQ).treaty_code มีข้อมูลอยู่ใน [cf_treaty](http://wiki.thaisamut.co.th/x/-gCaQQ).treaty_code **Field****Type****Basic validation/ Action****Default****เคสตรวจสุขภาพ**Dropdown List**กรณีที่ 1 และ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List **เลือกประเภท Treaty (รูปแบบ Retention หลัก)**Dropdown List**กรณีที่ 1**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับกรอก**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข**กรณีที่ 1**ห้ามแก้ไขต้องลบข้อมูลเดิมในรูปแบบเดิมในตารางข้อมูลทั้งหมดก่อนจึงจะสามารถแก้ไขได้**เลือกประเภท Treaty (รูปแบบ Retention รอง)**Dropdown List**กรณีที่ 1**บังคับกรอกกรณีเลือกรูปแบบ Retention รองแล้ว และเพิ่มข้อมูลใน**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข | **Table สำหรับดึงข้อมูลตัวเลือกมาแสดง** Screen FieldDB TableDB Field ที่แสดงDB Field ที่นำไปบันทึกเงื่อนไข**เคสตรวจสุขภาพ**[ms_medical_type](http://wiki.thaisamut.co.th/x/BIDKQQ)medical_type_thms_medical_type **เลือกประเภท Treaty (รูปแบบ Retention หลัก)**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ)descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000200**เลือกประเภท Treaty (รูปแบบ Retention รอง)**[cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) descriptionlookup_keyLookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000300โดยแสดงรายการ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).parent_id **บันทึกจาก Table แสดงตัวเลือกมา****ลงฐานข้อมูล**Screen FieldDB TableDB Field**เคสตรวจสุขภาพ**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_medical_type**เลือกประเภท Treaty (รูปแบบ Retention หลัก)**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_retention_type**เลือกประเภท Treaty (รูปแบบ Retention รอง)**[tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ)ms_retention_option |
| **Field** | **Type** | **Basic validation/ Action** | **Default** |
| **เคสตรวจสุขภาพ** | Dropdown List | **กรณีที่ 1 และ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับเลือกแสดงตัวเลือกในรูปแบบ Dropdown List |  |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | Dropdown List | **กรณีที่ 1**แสดงข้อมูลเดิมที่มีการบันทึกไว้บังคับกรอก**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข | **กรณีที่ 1**ห้ามแก้ไขต้องลบข้อมูลเดิมในรูปแบบเดิมในตารางข้อมูลทั้งหมดก่อนจึงจะสามารถแก้ไขได้ |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | Dropdown List | **กรณีที่ 1**บังคับกรอกกรณีเลือกรูปแบบ Retention รองแล้ว และเพิ่มข้อมูลใน**กรณีที่ 2**แสดงข้อมูลเดิมที่มีการบันทึกไว้ห้ามแก้ไข |  |
| Screen Field | DB Table | DB Field ที่แสดง | DB Field ที่นำไปบันทึก | เงื่อนไข |
| **เคสตรวจสุขภาพ** | [ms_medical_type](http://wiki.thaisamut.co.th/x/BIDKQQ) | medical_type_th | ms_medical_type |  |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000200 |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ) | description | lookup_key | Lookup Data ที่ [cf_lookup_catalog](http://wiki.thaisamut.co.th/display/RDSINRI/cf_lookup_catalog).parent_id = 1000300โดยแสดงรายการ [cf_lookup_catalog](http://wiki.thaisamut.co.th/x/PICeQQ).parent_id |
| Screen Field | DB Table | DB Field |
| **เคสตรวจสุขภาพ** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_medical_type |
| **เลือกประเภท Treaty (รูปแบบ Retention หลัก)** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_retention_type |
| **เลือกประเภท Treaty (รูปแบบ Retention รอง)** | [tx_tmp_retention](http://wiki.thaisamut.co.th/x/vwCaQQ) | ms_retention_option |

**กรณีเลือก ประเภท**

1. [Surplus > Standard / Substandard](http://wiki.thaisamut.co.th/x/ywECQg)
2. [Surplus > Amount](http://wiki.thaisamut.co.th/x/zQECQg)
3. [Surplus > Age Period](http://wiki.thaisamut.co.th/x/zwECQg)
4. [Surplus > Insurance Policies](http://wiki.thaisamut.co.th/x/0QECQg)
5. [Quota share > Quota share Percentage](http://wiki.thaisamut.co.th/x/0wECQg)
6. [Surplus-QS > Percentage (Layer)](http://wiki.thaisamut.co.th/x/1QECQg)
7. [QS-Surplus > Percentage (Layer)](http://wiki.thaisamut.co.th/x/1QECQg)
