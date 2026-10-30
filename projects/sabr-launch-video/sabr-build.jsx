// Sabr launch video — builds the main comp and the teaser in After Effects.
// Run: File > Scripts > Run Script File... and pick this file.
// Arabic needs: Preferences > Type > Text Engine = "South Asian and Middle Eastern" (restart AE once).
(function () {
    var CONFIG = {
        folder: "~/Sabr",
        clips: ["clips/s1.mp4", "clips/s2.mp4", "clips/s3.mp4", "clips/s4.mp4"],
        durations: [8, 5, 8, 6],    // seconds per shot, matches shot-list.md
        crossfade: 0.5,
        logo: "logo.ai",            // original Sabr logo: .ai, .psd or transparent .png
        voiceover: "vo.wav",        // optional
        font: "ThmanyahSans-Bold",  // PostScript name, check it in Font Book
        width: 1920,
        height: 1080,
        fps: 30,
        phrase: "معرفةً تستحق أن تُكتشف",
        tagline: "ما وراء الكلمة  |  Beyond the Word",
        // Sampled from the Sabr Canva designs; replace with the official values if they differ.
        ivory: [0.965, 0.945, 0.910], // #F6F1E8
        navy: [0.039, 0.145, 0.251],  // #0A2540
        gold: [0.769, 0.624, 0.345]   // #C49F58
    };

    var missing = [];

    function importRel(rel) {
        var f = new File(CONFIG.folder + "/" + rel);
        if (!f.exists) {
            missing.push(rel);
            return null;
        }
        return app.project.importFile(new ImportOptions(f));
    }

    // Scale and opacity want a different number of ease objects depending on layer type.
    function ease(prop) {
        var e = new KeyframeEase(0, 60);
        for (var k = 1; k <= prop.numKeys; k++) {
            for (var n = 1; n <= 3; n++) {
                var arr = [];
                for (var d = 0; d < n; d++) arr.push(e);
                try { prop.setTemporalEaseAtKey(k, arr, arr); break; } catch (err) {}
            }
        }
    }

    function fadeIn(layer, t, dur) {
        var op = layer.property("ADBE Transform Group").property("ADBE Opacity");
        op.setValueAtTime(t, 0);
        op.setValueAtTime(t + dur, 100);
        ease(op);
    }

    function fitScale(item, comp, cover) {
        var sx = comp.width / item.width, sy = comp.height / item.height;
        var s = (cover ? Math.max(sx, sy) : Math.min(sx, sy)) * 100;
        return [s, s];
    }

    function addClip(comp, item, name, t, d) {
        var layer;
        if (item) {
            layer = comp.layers.add(item);
            layer.property("ADBE Transform Group").property("ADBE Scale").setValue(fitScale(item, comp, true));
        } else {
            layer = comp.layers.addSolid(CONFIG.navy, "MISSING " + name, comp.width, comp.height, 1, d);
        }
        layer.startTime = t;
        try { layer.outPoint = t + d; } catch (e) {} // clip shorter than the slot
        return layer;
    }

    function addArabicText(comp, str, size, color, pos, inT, outT) {
        var layer = comp.layers.addText(str);
        var prop = layer.property("ADBE Text Properties").property("ADBE Text Document");
        var doc = prop.value;
        try { doc.font = CONFIG.font; } catch (e) {}
        doc.fontSize = size;
        doc.applyFill = true;
        doc.fillColor = color;
        doc.applyStroke = false;
        doc.justification = ParagraphJustification.CENTER_JUSTIFY;
        try { doc.direction = ParagraphDirection.DIRECTION_RIGHT_TO_LEFT; } catch (e) {}
        prop.setValue(doc);
        layer.property("ADBE Transform Group").property("ADBE Position").setValue(pos);
        layer.inPoint = inT;
        layer.outPoint = outT;
        return layer;
    }

    // A feathered wipe keeps Arabic letters joined, unlike a per-character typewriter.
    // Wipe Angle 90 with Completion going 100 -> 0 reveals from right to left.
    function writeOnRTL(layer, t, dur) {
        var fx = layer.property("ADBE Effect Parade").addProperty("ADBE Linear Wipe");
        fx.property("ADBE Linear Wipe-0002").setValue(90);
        fx.property("ADBE Linear Wipe-0003").setValue(150);
        var c = fx.property("ADBE Linear Wipe-0001");
        c.setValueAtTime(t, 100);
        c.setValueAtTime(t + dur, 0);
        ease(c);
    }

    // Moves the anchor onto the last word (leftmost in RTL) and pushes the camera into it.
    function zoomIntoLastWord(layer, t, dur, wordShare) {
        var tr = layer.property("ADBE Transform Group");
        var r = layer.sourceRectAtTime(t, false);
        var oldA = tr.property("ADBE Anchor Point").value;
        var newA = [r.left + r.width * wordShare / 2, r.top + r.height / 2];
        var pos = tr.property("ADBE Position").value;
        tr.property("ADBE Anchor Point").setValue(newA);
        tr.property("ADBE Position").setValue([pos[0] + newA[0] - oldA[0], pos[1] + newA[1] - oldA[1]]);
        var sc = tr.property("ADBE Scale");
        sc.setValueAtTime(t, [100, 100]);
        sc.setValueAtTime(t + dur, [2500, 2500]);
        ease(sc);
        var op = tr.property("ADBE Opacity");
        op.setValueAtTime(t + dur * 0.6, 100);
        op.setValueAtTime(t + dur, 0);
    }

    function addEndCard(comp, logoItem, t, outT) {
        if (logoItem) {
            var logo = comp.layers.add(logoItem);
            var s = (comp.width * 0.3) / logoItem.width * 100;
            var tr = logo.property("ADBE Transform Group");
            tr.property("ADBE Position").setValue([comp.width / 2, comp.height * 0.44]);
            tr.property("ADBE Scale").setValueAtTime(t, [s * 0.96, s * 0.96]);
            tr.property("ADBE Scale").setValueAtTime(t + 1.5, [s, s]);
            ease(tr.property("ADBE Scale"));
            logo.startTime = 0;
            logo.inPoint = t;
            logo.outPoint = outT;
            fadeIn(logo, t, 1);
        }
        var tag = addArabicText(comp, CONFIG.tagline, 54, CONFIG.ivory,
            [comp.width / 2, comp.height * 0.7], t + 0.6, outT);
        writeOnRTL(tag, t + 0.6, 1.2);
    }

    app.beginUndoGroup("Build Sabr launch video");

    var items = [];
    for (var i = 0; i < CONFIG.clips.length; i++) items.push(importRel(CONFIG.clips[i]));
    var logoItem = importRel(CONFIG.logo);
    var vo = new File(CONFIG.folder + "/" + CONFIG.voiceover).exists ? importRel(CONFIG.voiceover) : null;

    var starts = [0];
    for (i = 1; i < CONFIG.durations.length; i++) {
        starts.push(starts[i - 1] + CONFIG.durations[i - 1] - CONFIG.crossfade);
    }
    var last = CONFIG.durations.length - 1;
    var total = starts[last] + CONFIG.durations[last];

    // Main comp
    var comp = app.project.items.addComp("Sabr - Beyond the Word", CONFIG.width, CONFIG.height, 1, total, CONFIG.fps);
    comp.layers.addSolid(CONFIG.navy, "BG navy", CONFIG.width, CONFIG.height, 1, total);
    for (i = 0; i < items.length; i++) {
        var clip = addClip(comp, items[i], CONFIG.clips[i], starts[i], CONFIG.durations[i]);
        if (i > 0) fadeIn(clip, starts[i], CONFIG.crossfade);
    }

    var s2 = starts[1], s2End = starts[2] + CONFIG.crossfade;
    var phrase = addArabicText(comp, CONFIG.phrase, 96, CONFIG.ivory,
        [CONFIG.width / 2, CONFIG.height / 2], s2 + 0.4, s2End);
    writeOnRTL(phrase, s2 + 0.4, 1.6);
    zoomIntoLastWord(phrase, s2End - 1.4, 1.4, 0.27);

    addEndCard(comp, logoItem, starts[3] + 2.5, total);
    if (vo) comp.layers.add(vo).moveToEnd();

    // Teaser: first 5 s of shot 1, then the end card
    var teaserLen = 7;
    var teaser = app.project.items.addComp("Sabr - Teaser", CONFIG.width, CONFIG.height, 1, teaserLen, CONFIG.fps);
    teaser.layers.addSolid(CONFIG.navy, "BG navy", CONFIG.width, CONFIG.height, 1, teaserLen);
    var t1 = addClip(teaser, items[0], CONFIG.clips[0], 0, 5.5);
    var t1Op = t1.property("ADBE Transform Group").property("ADBE Opacity");
    t1Op.setValueAtTime(4.8, 100);
    t1Op.setValueAtTime(5.5, 0);
    addEndCard(teaser, logoItem, 5, teaserLen);

    app.endUndoGroup();
    comp.openInViewer();

    var msg = "Built \"Sabr - Beyond the Word\" (" + total + " s) and \"Sabr - Teaser\" (" + teaserLen + " s).";
    if (missing.length) msg += "\n\nMissing files (placeholders added):\n" + missing.join("\n");
    if (vo && vo.duration > total) msg += "\n\nVoiceover is " + Math.round(vo.duration) + " s, longer than the video.";
    alert(msg);
})();
